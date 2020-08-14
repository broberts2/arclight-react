import React, { useState } from "react";
import { Dropdown } from "../components/index";

export default {
  Component: (
    <Dropdown
      id={"Components"}
      onChange={(e) => alert(e.target.value)}
      items={[{ component: <div>thing</div>, value: 10 }]}
    />
  ),
  Example: `
  import { Dropdown } from "arclight-react";

  <Dropdown
    id={"Components"}
    onChange={(e) => alert(e.target.value)}
    items={[{ component: <div>thing</div>, value: 10 }]}
  />
  `,
};
