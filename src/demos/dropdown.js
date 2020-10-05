import React, { useState } from "react";
import { Dropdown } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <div style={{ width: "250px" }}>
      <Dropdown
        defaultValue={10}
        label={"Items"}
        allowNone={"<None>"}
        theme={THEME}
        onChange={(e) => null}
        items={[
          { component: <div>10</div>, value: 10 },
          { component: <div>20</div>, value: 20 },
          { component: <div>30</div>, value: 30 },
        ]}
      />
    </div>
  ),
  Example: `
  import { Dropdown } from "arclight-react";

  <Dropdown
    defaultValue={10}
    label={"Items"}
    allowNone={"<None>"} // Disabled if null or false
    theme={THEME}
    onChange={(e) => null}
    items={[
      { component: <div>10</div>, value: 10 },
      { component: <div>20</div>, value: 20 },
      { component: <div>30</div>, value: 30 },
    ]}
  />
  `,
});
