import React, { useState } from "react";
import { Timer } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <Timer
      theme={THEME}
      size={200}
      seconds={15}
      crit={7}
      strokeWidth={8}
      onComplete={() => console.log("Timer Finished")}
    />
  ),
  Example: `
  import { Timer } from "arclight-react";

  <Timer
    theme={THEME}
    size={200}
    seconds={15}
    crit={7}
    strokeWidth={8}
    onComplete={() => console.log("Timer Finished")}
  />
  `,
});
