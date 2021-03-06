import React from "react";
import styled from "styled-components";
import theme from "../themes";
import builders from "./builders/builders";
import animations from "./animations/index";
import { Transition } from "../index";

const Particles = styled.div`
  width: 100%;
  height: 100%;
`;

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.sizeRef = React.createRef();
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.state = {
      suspendClear: false,
      animationsList: {},
      width: this.props.width
        ? this.props.width
        : this.sizeRef.current.clientWidth,
      height: this.props.height
        ? this.props.height
        : this.sizeRef.current.clientHeight,
    };
    this.Plane = this.canvasRef.current;
    this.Plane.width = this.state.width;
    this.Plane.height = this.state.height;
    this.Canvas = this.Plane.getContext("2d");
    this.Animations = animations(this.state.width, this.state.height);
    this.Builders = builders(this.Canvas);
    this.Offset = this.Plane.getBoundingClientRect();
    if (this.props.animations) {
      this.props.animations.map((anim) =>
        this.addAnimation(
          anim.name,
          {
            x: (this.state.width * anim.x) / 100,
            y: (this.state.height * anim.y) / 100,
          },
          anim.particleColor
        )
      );
    }
    this.play();
  }

  addAnimation(animationName, coords, particleColor) {
    const state = this.state;
    const __add__ = (inc) => {
      if (!state.animationsList[`${animationName}${inc}`]) {
        state.animationsList[`${animationName}${inc}`] = this.Animations[
          animationName
        ](this.Builders, coords, particleColor);
        this.setState(state);
      } else {
        __add__(++inc);
      }
    };
    __add__(0);
  }

  play() {
    if (!this.state.suspendClear)
      this.Canvas.clearRect(0, 0, this.state.width, this.state.height);
    for (let key in this.state.animationsList) {
      this.state.animationsList[key](this.state.animationsList, key);
    }
    requestAnimationFrame(() => this.play());
  }

  render() {
    return (
      <Transition inheritDimensions trans={this.props.trans}>
        <Particles ref={this.sizeRef}>
          <canvas
            ref={this.canvasRef}
            onClick={(e) => {
              if (this.props.onClickAnimation) {
                this.addAnimation(
                  this.props.onClickAnimation.name,
                  {
                    x: this.props.onClickAnimation.x
                      ? this.state.width * (this.props.onClickAnimation.x / 100)
                      : e.clientX - this.Offset.left,
                    y: this.props.onClickAnimation.y
                      ? this.state.height *
                        (this.props.onClickAnimation.y / 100)
                      : e.clientY - this.Offset.top,
                  },
                  this.props.onClickAnimation.particleColor
                );
              }
            }}
          />
        </Particles>
      </Transition>
    );
  }
}
