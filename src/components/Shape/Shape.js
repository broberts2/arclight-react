import React from "react";
import styled from "styled-components";
import { Transition } from "../index";
import theme from "../themes";

const Shape = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default class _ extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.Plane = this.canvasRef.current;
    this.Plane.width = this.props.width;
    this.Plane.height = this.props.height;
    this.Canvas = this.Plane.getContext("2d");
    this.Canvas.fillRect(25, 25, 100, 100);
    this.Canvas.clearRect(45, 45, 60, 60);
    this.Canvas.strokeRect(50, 50, 50, 50);
  }

  render() {
    return (
      <Transition trans={this.props.trans}>
        <Shape width={this.props.width} height={this.props.height}>
          <canvas style={{ backgroundColor: "green" }} ref={this.canvasRef} />
        </Shape>
      </Transition>
    );
  }
}
