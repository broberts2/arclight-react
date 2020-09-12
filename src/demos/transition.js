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

  // Example usage as an element container
  <Transition trans={{ animation: "fadeInUpBig", delay: 1 }}>
    <h1>Hey There!</h1>
  </Transition>

  // Example usage inside a arclight-react component
  <Button
    trans={{ animation: "fadeInUpBig", delay: 1 }}
    theme={theme[THEME].complement}
    pop
    onClick={() => console.log("I've been clicked!")}
  >
    Click Me!
  </Button>
  `,
});
