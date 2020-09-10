import React, { useState } from "react";
import { Dropdown } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <div style={{ width: "250px" }}>
      <Dropdown
        theme={THEME}
        onChange={(e) => alert(e.target.value)}
        items={[{ component: <div>thing</div>, value: 10 }]}
      />
    </div>
  ),
  Example: `
  import { Dropdown } from "arclight-react";

  <Dropdown
    theme={theme[__theme__].complement}
    onChange={(e) => alert(e.target.value)}
    items={[{ component: <div>thing</div>, value: 10 }]}
  />
  `,
});
