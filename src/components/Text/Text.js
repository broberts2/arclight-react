import React from "react";
import styled from "styled-components";
import { Transition } from "../index";
import theme from "../themes";

const Text = styled.div`
  ${props => props.theme ? `color: ${theme[props.theme].textColor};` : null}
`;

export default class _ extends React.Component {

  render() {
    return (
      <Transition trans={this.props.trans}>
        <Text theme={this.props.theme}>
          {this.props.children}
        </Text>
      </Transition>
    );
  }
}
