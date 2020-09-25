import React, { useState } from "react";
import { TextField } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <React.Fragment>
      <TextField
        theme={THEME}
        onEnter={(e) => console.log(e)}
        readonly={false}
        value={null}
        placeholder={"Input Field"}
        onChange={(e) => console.log(e.target.value)}
      />
      <div style={{ height: "15px" }} />
      <TextField
        variant={"filled"}
        theme={THEME}
        onEnter={(e) => console.log(e)}
        readonly={false}
        value={null}
        placeholder={"Input Field"}
        onChange={(e) => console.log(e.target.value)}
      />
      <div style={{ height: "15px" }} />
      <TextField
        variant={"outlined"}
        theme={THEME}
        onEnter={(e) => console.log(e)}
        readonly={false}
        value={null}
        placeholder={"Input Field"}
        onChange={(e) => console.log(e.target.value)}
      />
    </React.Fragment>
  ),
  Example: `
  import { TextField } from "arclight-react";

  <TextField
    variant={"filled"} // optional: standard, outlined, filled
    theme={THEME}
    textSize={null} // Default 18
    onEnter={(e) => console.log(e)}
    readonly={false}
    value={null}
    placeholder={"Input Field"}
    onChange={(e) => console.log(e.target.value)}
  />
  `,
});
