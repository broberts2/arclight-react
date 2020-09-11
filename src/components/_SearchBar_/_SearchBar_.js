import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Transition } from "../index";
import TextField from "@material-ui/core/TextField";
import theme from "../themes";

const _SearchBar_ = styled.div`
  width: ${(props) => props.width};
`;

const Filter = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  cursor: pointer;
`;

export default class SearchBar extends React.Component {
  state = {
    filters: this.props.filters,
  };
  render() {
    const search = (
      <td width={"100%"} style={{ minWidth: "200px" }}>
        <form
          noValidate
          autoComplete="on"
          style={{ width: "100%", maxWidth: "500px", color: "white" }}
        >
          <TextField
            value={this.props.value ? this.props.value : null}
            label={this.props.placeholder}
            onChange={(e) =>
              this.props.onChange ? this.props.onChange(e) : null
            }
            style={{ width: "100%", color: "white" }}
          />
        </form>
      </td>
    );
    const _filters = this.state.filters ? (
      <td>
        <table>
          <tbody>
            <tr>
              {this.state.filters.map((el, i) => (
                <td>
                  <Filter
                    onClick={() => {
                      const state = this.state;
                      state.filters[i].active = !state.filters[i].active;
                      el.onClick(state.filters[i]);
                      this.setState(state);
                    }}
                    style={{ opacity: el.active ? 1 : 0.1 }}
                  >
                    {el.display}
                  </Filter>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </td>
    ) : null;
    return (
      <Transition trans={this.props.trans}>
        <ThemeProvider theme={theme}>
          <_SearchBar_ width={this.props.width}>
            <table width={"100%"}>
              <tbody>
                <tr>
                  {this.props.filtersRight ? (
                    <React.Fragment>
                      {search}
                      {_filters}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {_filters}
                      {search}
                    </React.Fragment>
                  )}
                </tr>
              </tbody>
            </table>
          </_SearchBar_>
        </ThemeProvider>
      </Transition>
    );
  }
}
