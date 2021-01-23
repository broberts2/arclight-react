import React from "react";
import styled from "styled-components";
import { Button, Transition } from "../index";
import theme from "../themes";

const _TextArea = styled.div`
  width: 100%;
  border-radius: 3px;
  background-color: ${(props) => theme[props.props.theme].backgroundColor};
  & textarea {
    font-family: inherit;
    overflow-y: auto;
    border-radius: 3px;
    margin: 1px;
    margin-bottom: -4.5px;
    width: calc(100% - 34px);
    height: ${(props) => props.props.height};
    resize: none;
    padding: 15px;
    font-size: 1em;
    color: ${(props) => theme[theme[props.props.theme].complement].textColor};
    background-color: ${(props) =>
      theme[theme[props.props.theme].complement].backgroundColor};
  }
  & textarea:focus {
    outline: none;
  }
  & textarea::selection {
    background: ${(props) => theme[props.props.theme].primaryColor};
  }
  & textarea::-moz-selection {
    background: ${(props) => theme[props.props.theme].primaryColor};
  }
`;

export default class TextArea extends React.Component {
  state = {
    shifting: false,
    entering: false,
    value: "",
  };

  onEnterPressed() {
    if (this.props.onChange) this.props.onChange({ target: { value: "" } });
    if (this.props.onEnter)
      this.props.onEnter(
        this.props.value ? this.props.value : this.state.value
      );
    this.setState({ value: "" });
  }

  keyCheck(e) {
    if (e.keyCode === 16) {
      this.setState({ shifting: true });
    } else if (e.keyCode === 13) {
      this.setState({ entering: true });
      if (!this.state.shifting) this.onEnterPressed();
    }
  }

  render() {
    return (
      <Transition trans={this.props.trans}>
        <_TextArea props={this.props}>
          <textarea
            value={this.props.value ? this.props.value : this.state.value}
            placeholder={this.props.placeholder ? this.props.placeholder : null}
            readonly={this.props.readonly}
            onKeyDown={(e) => this.keyCheck(e)}
            onChange={(e) => {
              if (!this.state.entering || this.state.shifting) {
                if (this.props.onChange) this.props.onChange(e);
                if (!this.props.value) this.setState({ value: e.target.value });
              }
            }}
            onKeyUp={(e) => {
              if (e.keyCode === 16) this.setState({ shifting: false });
              if (e.keyCode === 13) this.setState({ entering: false });
            }}
          />
        </_TextArea>
        {this.props.controls ? (
          <table dir={"rtl"} style={{ float: "right", marginTop: "8px" }}>
            <tbody>
              <tr>
                {this.props.controls.map((el) => (
                  <td>
                    <Button
                      pop
                      theme={theme[this.props.theme].complement}
                      onClick={() => el.operation()}
                    >
                      {el.name}
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        ) : null}
      </Transition>
    );
  }
}
