import React, { useState } from "react";
import { TechDivider } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <React.Fragment>
      <div style={{width: "100%", height: "75px", backgroundColor: "red"}} />
      <TechDivider filter={"brightness(0) invert(1)"} />
      <div style={{width: "100%", height: "75px", backgroundColor: "blue"}} />
    </React.Fragment>
  ),
  Example: `
  import { TechDivider } from "arclight-react";

  <TechDivider />
  `,
});
