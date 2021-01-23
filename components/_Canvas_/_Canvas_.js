import React from "react";
import styled from "styled-components";
import { Transition } from "../index";
import theme from "../themes";

const Canvas = styled.div`
  width: 100%;
  height: 100%;
`;

export default class _ extends React.Component {

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  router(action, instructions) {
    switch(action) {
      case "drawLine":
        return this.drawLine(instructions);
      case "drawCurve":
        return this.drawCurve(instructions);
      case "drawCircle":
        return this.drawCircle(instructions);
    }
  }

  componentDidMount() {
    this.Plane = this.canvasRef.current;
    this.Plane.style.width = "100%";
    this.Plane.style.height = "100%";
    this.Canvas = this.Plane.getContext("2d");
    this.props.instruct.map(el => this.router(el.type, el));
  }

  drawLine(params) {
    this.Canvas.beginPath();
    this.Canvas.moveTo(this.Plane.width * params.origin.x / 100, this.Plane.height * params.origin.y / 100);
    this.Canvas.lineTo(this.Plane.width * params.to.x / 100, this.Plane.height * params.to.y / 100);
    this.Canvas.strokeStyle = params.color;
    this.Canvas.lineWidth = params.strength;
    this.Canvas.stroke();
  }

  drawCurve(params) {
    this.Canvas.beginPath();
    this.Canvas.moveTo(this.Plane.width * params.origin.x / 100, this.Plane.height * params.origin.y / 100);  
    this.Canvas.quadraticCurveTo(this.Plane.width * params.anchor.x / 100, this.Plane.height * params.anchor.y / 100, this.Plane.width * params.to.x / 100, this.Plane.height * params.to.y / 100);
    this.Canvas.strokeStyle = params.color;
    this.Canvas.lineWidth = params.strength;
    this.Canvas.stroke();  
  }

  drawCircle(params) {
    this.Canvas.beginPath();
    this.Canvas.arc(this.Plane.width * params.origin.x / 100, this.Plane.height * params.origin.y / 100, 15, 0, 2 * Math.PI);
    this.Canvas.strokeStyle = params.color;
    this.Canvas.lineWidth = params.strength;
    this.Canvas.stroke();
  }

  render() {
    return (
      <Transition inheritDimensions trans={this.props.trans}>
        <Canvas ref={this.sizeRef}>
          <canvas
            ref={this.canvasRef}
          />
        </Canvas>
      </Transition>
    )
  }
}