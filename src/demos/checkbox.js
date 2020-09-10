import React, { useState } from "react";
import { Checkbox } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: <Checkbox theme={THEME} onCheck={(e) => alert(`Checked: ${e}`)} />,
  Example: `
  import { Checkbox } from "arclight-react";

  <Checkbox onCheck={(e) => alert("Checked: ${"${e}"}")} />
  `,
});