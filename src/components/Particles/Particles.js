import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../themes";
import builders from "./builders/builders";
import animations from "./animations/index";

const Particles = styled.div``;

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {};
    this.state.animationsList = {};
  }

  componentDidMount() {
    this.Plane = this.canvasRef.current;
    this.Plane.width = this.props.width;
    this.Plane.height = this.props.height;
    this.Canvas = this.Plane.getContext("2d");
    this.Animations = animations(this.props.width, this.props.height);
    this.Builders = builders(this.Canvas);
    this.Offset = this.Plane.getBoundingClientRect();
    if (this.props.animations) {
      this.props.animations.map((anim) =>
        this.addAnimation(
          anim.name,
          {
            x: (this.props.width * anim.x) / 100,
            y: (this.props.height * anim.y) / 100,
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
    this.Canvas.clearRect(0, 0, this.props.width, this.props.height);
    for (let key in this.state.animationsList) {
      this.state.animationsList[key](this.state.animationsList, key);
    }
    requestAnimationFrame(() => this.play());
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Particles>
          <canvas
            ref={this.canvasRef}
            onClick={(e) => {
              if (this.props.onClickAnimation) {
                this.addAnimation(
                  this.props.onClickAnimation.name,
                  {
                    x: this.props.onClickAnimation.x
                      ? this.props.width * (this.props.onClickAnimation.x / 100)
                      : e.clientX - this.Offset.left,
                    y: this.props.onClickAnimation.y
                      ? this.props.height *
                        (this.props.onClickAnimation.y / 100)
                      : e.clientY - this.Offset.top,
                  },
                  this.props.onClickAnimation.particleColor
                );
              }
            }}
          />
        </Particles>
      </ThemeProvider>
    );
  }
}
