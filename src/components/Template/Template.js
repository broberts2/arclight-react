import React from "react";
import styled from "styled-components";
import { Transition } from "../index";
import theme from "../themes";

const Template = styled.div``;

export default React.memo((props) => (
  <Transition trans={props.trans}>
    
      <Template>Stuff goes in here</Template>
    
  </Transition>
));
