import React, { useState } from "react";
import { Shape } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: <Shape width={"250px"} height={"250px"} />,
  Example: `
  import { Shape } from "arclight-react";

  <Shape />
  `,
});
