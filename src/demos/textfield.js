import React, { useState } from "react";
import { TextField } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <TextField
      readonly={false}
      value={null}
      placeholder={"Input Field"}
      onChange={(e) => console.log(e.target.value)}
    />
  ),
  Example: `
  import { TextField } from "arclight-react";

  <React.Fragment>
    <TextField
      placeholder={"Input Field"}
      onChange={(e) => console.log(e.target.value)}
    />
  </React.Fragment>
  `,
});
