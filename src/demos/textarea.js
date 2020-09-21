import React, { useState } from "react";
import { TextArea } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <TextArea
      readonly={false}
      onEnter={null}
      value={null}
      height={"150px"}
      theme={THEME}
      controls={[
        { name: "Button1", operation: () => alert("Button1 was pressed!") },
        { name: "Button2", operation: () => alert("Button2 was pressed!") },
      ]}
      placeholder={"Some sample text goes in here."}
      onChange={null}
    />
  ),
  Example: `
  import { TextArea } from "arclight-react";

  <TextArea
    readonly={false}
    value={null}
    height={"150px"}
    theme={THEME}
    controls={[
      { name: "Button1", operation: () => alert("Button1 was pressed!") },
      { name: "Button2", operation: () => alert("Button2 was pressed!") },
    ]}
    placeholder={"Some sample text goes in here."}
    onChange={(e) => console.log(e.target.value)}
  />
  `,
});
