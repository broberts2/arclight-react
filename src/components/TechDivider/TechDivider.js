import React from "react";
import styled from "styled-components";
import { Transition } from "../index";
import theme from "../themes";

const TechDivider = styled.div`
  margin-top: -7.15vw;
  margin-bottom: -7.15vw;
  & img {
    width: 100%;
    ${props => props.filter ? `filter: ${props.filter};` : null}
  }
`;

export default React.memo((props) => (
  <Transition trans={props.trans}>
      <TechDivider filter={props.filter}><img src={require("./img.svg")} /></TechDivider>
  </Transition>
));