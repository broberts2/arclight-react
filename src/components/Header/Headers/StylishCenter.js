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
  color: ${(props) => theme[props.theme].textColor};
`;

const Control = styled.div`
  display: inline-block;
`;

const Crown = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default class StylishCenter extends React.Component {
  state = { controls1: null, controls2: null };

  componentDidMount() {
    const marginMod = "6px";
    if (this.props.controls.length > 0) {
      const O = { c1: [], c2: [] };
      this.props.controls.map((el, i) =>
        O[i % 2 === 0 ? "c1" : "c2"].push(
          <Control
            style={{
              marginRight: i % 2 === 0 ? "0px" : marginMod,
              marginLeft: i % 2 === 0 ? marginMod : "0px",
            }}
          >
            {el}
          </Control>
        )
      );
      this.setState({ controls1: O.c1.reverse(), controls2: O.c2 });
    }
  }

  render() {
    const marginMod = 10;
    return (
      
        <Container
          theme={this.props.theme}
          width={this.props.width}
          height={this.props.height}
        >
          <table>
            <tbody>
              <tr>
                <td align={"left"} width={"50%"}>
                  {this.state.controls2}
                </td>
                <td align={"right"} width={"50%"}>
                  {this.state.controls1}
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
