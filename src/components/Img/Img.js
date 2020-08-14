import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Loader } from "../../components/index";
import theme from "../themes";

export default React.memo((props) => (
  <ThemeProvider theme={theme}>
    <Loader>
      <img {...props} />
    </Loader>
  </ThemeProvider>
));
