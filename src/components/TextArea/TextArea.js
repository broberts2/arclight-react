import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "../index";
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
`;

export default class TextArea extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <_TextArea props={this.props}>
          <textarea
            value={this.props.value ? this.props.value : null}
            placeholder={this.props.placeholder ? this.props.placeholder : null}
            readonly={this.props.readonly}
            onChange={(e) =>
              this.props.onChange ? this.props.onChange(e) : null
            }
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
      </ThemeProvider>
    );
  }
}
