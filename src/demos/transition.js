import React, { useState } from "react";
import { Transition, Button } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <Button
      trans={{ animation: "fadeInUpBig", delay: 1 }}
      theme={theme[THEME].complement}
      pop
      onClick={() => console.log("I've been clicked!")}
    >
      Click Me!
    </Button>
  ),
  Example: `
  import { Transition } from "arclight-react";

  <Transition>
    <h1>Words</h1>
  </Transition>
  `,
});
