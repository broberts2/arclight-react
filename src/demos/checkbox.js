import React, { useState } from "react";
import { Checkbox } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: <Checkbox theme={THEME} onCheck={(e) => alert("Hello!")} />,
  Example: `
  import { Checkbox } from "arclight-react";

  <Checkbox theme={THEME} color={null} onCheck={(e) => alert("Hello!")} />
  `,
});
