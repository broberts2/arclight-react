import React from "react";
import styled from "styled-components";
import { Transition } from "../index";
import theme from "../themes";

const _MediaCycler = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  pointer-events: none;
`;

const Element1 = styled.div`
  width: 100%;
  height: 100%;
  & video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const Element2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  & video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const shuffle = (array) => {
  const usedNums = {};
  const arr = [];
  const _ = (n) => {
    if (!usedNums[n]) {
      usedNums[n] = true;
      return array[n];
    } else {
      return _(Math.floor(Math.random() * array.length));
    }
  };
  while (Object.keys(usedNums).length < array.length) {
    arr.push(_(Math.floor(Math.random() * array.length)));
  }
  return arr;
};

export default class MediaCycler extends React.Component {
  state = {
    element1: null,
    element2: null,
    elements: this.props.randomize
      ? shuffle(this.props.elements)
      : this.props.elements,
    interval: this.props.interval,
    transElement2: null,
    index: 0,
    action: 0,
  };

  set(src) {
    switch (this.props.type) {
      case "video":
        return <video preload loop autoPlay muted src={src} />;
      case "img":
        return <img src={src} />;
    }
  }

  incIndex() {
    return (this.state.index =
      this.state.index >= this.state.elements.length - 1
        ? 0
        : this.state.index + 1);
  }

  doAction(i) {
    switch (i) {
      case 0:
        return this.state.elements.length > 2
          ? this.setState({
              element1: this.set(this.state.elements[this.incIndex()]),
            })
          : null;
      case 1:
        return this.setState({
          transElement2: {
            animation: this.props.elementTransition.transOut.animation,
            duration: this.props.elementTransition.transOut.duration,
          },
        });
      case 2:
        return this.state.elements.length > 2
          ? this.setState({
              element2: this.set(this.state.elements[this.incIndex()]),
            })
          : this.incIndex();
      case 3:
        return this.setState({
          transElement2: {
            animation: this.props.elementTransition.transIn.animation,
            duration: this.props.elementTransition.transIn.duration,
          },
        });
    }
  }

  componentDidMount() {
    this.setState({
      element1: this.set(this.state.elements[0]),
      intervalId: setInterval(() => {
        this.state.action = ++this.state.action > 3 ? 0 : this.state.action;
        this.doAction(this.state.action);
      }, this.state.interval * 500),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <Transition trans={this.props.trans}>
        <_MediaCycler width={this.props.width} height={this.props.height}>
          <Element1>{this.state.element1}</Element1>
          <Element2>
            <Transition inheritDimensions trans={this.state.transElement2}>
              {this.state.element2}
            </Transition>
          </Element2>
        </_MediaCycler>
      </Transition>
    );
  }
}
