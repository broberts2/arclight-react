import React from "react";
import styled, { ThemeProvider } from "styled-components";
import TextField from "@material-ui/core/TextField";
import { Transition } from "../index";
import theme from "../themes";

export default class SearchBar extends React.Component {
  render() {
    return (
      <Transition trans={this.props.trans}>
        <ThemeProvider theme={theme}>
          <form
            noValidate
            autoComplete="off"
            style={{ width: "100%", fontFamily: "inherit" }}
          >
            <TextField
              value={this.props.value ? this.props.value : null}
              readonly={this.props.readonly}
              label={this.props.placeholder}
              onChange={(e) =>
                this.props.onChange ? this.props.onChange(e) : null
              }
              style={{ width: "100%", fontFamily: "inherit" }}
            />
          </form>
        </ThemeProvider>
      </Transition>
    );
  }
}
