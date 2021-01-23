import React from "react";
import styled from "styled-components";
import theme from "../../themes";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
  & table {
    width: 100%;
    height: 100%;
  }
`;

const Control = styled.div`
  display: inline-block;
`;

const Crown = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

export default class StylishCenter extends React.Component {
  state = { controls1: null, controls2: null };

  componentDidMount() {
    const marginMod = "6px";
    if (this.props.controls.length > 0) {
      const controls = [];
      this.props.controls.map((el, i) =>
        controls.push(
          <Control
            style={{
              marginLeft: marginMod,
            }}
          >
            {el}
          </Control>
        )
      );
      this.setState({ controls: controls.reverse() });
    }
  }

  render() {
    const marginMod = 10;
    return (
      
        <Container width={this.props.width} height={this.props.height}>
          <table>
            <tbody>
              <tr>
                <td align={"right"} width={"100%"}>
                  {this.state.controls}
                </td>
              </tr>
            </tbody>
          </table>
          <Crown>{this.props.crown}</Crown>
          {this.props.textDisplay && this.props.textDisplay.left ? (
            <div
              style={{
                position: "absolute",
                bottom: `${marginMod}px`,
                left: `${marginMod}px`,
              }}
            >
              {this.props.textDisplay.left}
            </div>
          ) : null}
          {this.props.textDisplay && this.props.textDisplay.center ? (
            <div
              style={{
                position: "absolute",
                bottom: `${marginMod}px`,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {this.props.textDisplay.center}
            </div>
          ) : null}
          {this.props.textDisplay && this.props.textDisplay.right ? (
            <div
              style={{
                position: "absolute",
                bottom: `${marginMod}px`,
                right: `${marginMod}px`,
              }}
            >
              {this.props.textDisplay.right}
            </div>
          ) : null}
        </Container>
      
    );
  }
}
