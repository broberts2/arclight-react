import React, { useState } from "react";
import { Checkbox } from "../components/index";

export default {
  Component: <Checkbox onCheck={() => alert("I was checked.")} />,
  Example: `
  import { Checkbox } from "arclight-react";

  <Checkbox onCheck={() => alert("I was checked.")} />
  `,
};
