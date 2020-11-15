import React, { useState } from "react";
import { Panel } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <table width={"100%"}>
      <tbody>
        <tr>
          <td align={"center"}>
            <Panel
              onClick={() => console.log("hello!")}
              padding={"3px"}
              width={"250px"}
              height={"250px"}
              theme={theme[THEME].complement}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "blue",
                }}
              />
            </Panel>
          </td>
          <td align={"center"}>
            <Panel
              padding={"10px"}
              background={{
                type: "video",
                src: require("../video1.mp4"),
                fadeOnPause: true,
              }}
              onClick={() => console.log("hello!")}
              width={"250px"}
              height={"250px"}
              theme={theme[THEME].complement}
            />
          </td>
          <td align={"center"}>
            <Panel
              onClick={() => console.log("hello!")}
              width={"250px"}
              height={"250px"}
              theme={theme[THEME].complement}
            />
          </td>
        </tr>
      </tbody>
    </table>
  ),
  Example: `
  import { Panel } from "arclight-react";

  <Panel
    padding={"10px"}
    background={{
      type: "video",
      src: require("../video1.mp4"),
      fadeOnPause: true,
    }}
    onClick={() => console.log("hello!")}
    width={"250px"}
    height={"250px"}
    theme={theme[THEME].complement}
  />
  `,
});
