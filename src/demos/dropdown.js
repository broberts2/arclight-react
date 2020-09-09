import React, { useState } from "react";
import { Dropdown } from "../components/index";

export default {
  Component: (
    <Dropdown
      id={"Example"}
      onChange={(e) => alert(e.target.value)}
      items={[{ component: <div>thing</div>, value: 10 }]}
    />
  ),
  Example: `
  import { Dropdown } from "arclight-react";

  <Dropdown
    id={"Example"}
    onChange={(e) => alert(e.target.value)}
    items={[{ component: <div>thing</div>, value: 10 }]}
  />
  `,
};
