import React, { useState } from "react";
import { Button } from "../components/index";

export default {
  Component: (
    <Button pop onClick={() => alert("I've been clicked!")}>
      Click Me!
    </Button>
  ),
  Example: `
  import { Button } from "arclight-react";

  <Button pop onClick={() => alert("I've been clicked!")}>
    Click Me!
  </Button>
  `,
};
