import React, { useState } from "react";
import { Button } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <table>
      <tbody>
        <tr>
          <td>
            <Button
              textColor={null}
              theme={theme[THEME].complement}
              pop
              onClick={() => console.log("I've been clicked!")}
            >
              Click Me!
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  ),
  Example: `
  import { Button } from "arclight-react";

  <Button
    textColor={"null"}
    theme={theme[THEME].complement}
    pop
    onClick={() => console.log("I've been clicked!")}
  >
    Click Me!
  </Button>
  `,
});
