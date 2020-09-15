import React, { useState } from "react";
import { Timer } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <Timer
      initialRemainingTime={null}
      resetKey={false} // Compares new key to old key value and if !=, resets timer
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
    initialRemainingTime={null}
    resetKey={false} // Compares new key to old key value and if !=, resets timer
    theme={THEME}
    size={200}
    seconds={15}
    crit={7}
    strokeWidth={8}
    onComplete={() => console.log("Timer Finished")} // May also return ["true", 1500] to restart the timer in 1.5s
  />
  `,
});
