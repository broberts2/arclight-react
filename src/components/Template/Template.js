import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../themes";

const Template = styled.div``;

export default React.memo((props) => (
  <ThemeProvider theme={theme}>
    <Template>Stuff goes in here</Template>
  </ThemeProvider>
));
