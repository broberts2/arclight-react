import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Loader, Transition } from "../../components/index";
import theme from "../themes";

export default React.memo((props) => (
  <Transition trans={props.trans}>
    <ThemeProvider theme={theme}>
      <Loader>
        <img {...props} />
      </Loader>
    </ThemeProvider>
  </Transition>
));
