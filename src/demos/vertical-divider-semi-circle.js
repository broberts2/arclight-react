import React, { useState } from "react";
import { VerticalDividerSemiCircle } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <VerticalDividerSemiCircle height={"100px"} />
  ),
  Example: `
  import { Timer } from "arclight-react";

  <VerticleDividerSemiCircle />
  `,
});
