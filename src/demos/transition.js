import React, { useState } from "react";
import { Transition, Button } from "../components/index";
import theme from "../components/themes";

export default (THEME, anim) => ({
  Component: (
    <div style={{ display: "inline-block" }}>
      <a href={"https://animate.style"} target={"_blank"}>
        <h1>Courtesy of animate.style</h1>
      </a>
    </div>
  ),
  Example: `
  import { Transition } from "arclight-react";

  <Transition trans={{ animation: "fadeInUpBig", delay: 1 }}>
    <h1>Hey There!</h1>
  </Transition>

  <Transition
    inheritDimensions // Use to inherit width and height dimensions of parent container
    trans={{ animation: "fadeInUpBig", delay: 1 }}
  >
    <h1>Hey There!</h1>
  </Transition>

  <Button
    trans={{ animation: "fadeInLeft", delay: 1 }}
    theme={theme[THEME].complement}
    pop
    onClick={() => console.log("I've been clicked!")}
  >
    Click Me!
  </Button>
  `,
});
