import React, { useState } from "react";
import { Text } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <Text theme={THEME}>
      I am some example text!
    </Text>
  ),
  Example: `
  import { Text } from "arclight-react";

  <Text theme={THEME}>
    I am some example text!
  </Text>
  `,
});
