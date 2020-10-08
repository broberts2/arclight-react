import React, { useState } from "react";
import { Button, Utils, FontAwesomeIcon } from "../components/index";
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
              onClick={() => Utils.SFX.play("ding")}
            >
              <FontAwesomeIcon
                color={null}
                theme={theme[THEME].complement}
                icon={"music"}
              />
              ding
            </Button>
          </td>
          <td>
            <Button
              textColor={null}
              theme={theme[THEME].complement}
              pop
              onClick={() => Utils.SFX.play("drop")}
            >
              <FontAwesomeIcon
                color={null}
                theme={theme[THEME].complement}
                icon={"music"}
              />
              drop
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  ),
  Example: `
  import { Utils } from "arclight-react";

  <Button
    textColor={"null"}
    theme={theme[THEME].complement}
    pop
    onClick={() => Utils.SFX.play("ding")}
  >
    ding
  </Button>
  `,
});
