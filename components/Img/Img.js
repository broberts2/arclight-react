import React from "react";
import styled from "styled-components";
import { Loader, Transition } from "../index";
import theme from "../themes";

export default React.memo((props) => (
  <Transition trans={props.trans}>
    <img {...props} />
  </Transition>
));
