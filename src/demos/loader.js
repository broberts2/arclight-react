import React, { useState } from "react";
import { Loader } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <div>
      <table width={"100%"}>
        <tbody>
          <tr>
            <td>
              <div style={{ height: "100px", position: "relative" }}>
                <Loader
                  size={30}
                  color={"red"}
                  type={"ClipLoader"}
                  loaded={false}
                  theme={THEME}
                />
              </div>
            </td>
            <td>
              <div style={{ height: "100px", position: "relative" }}>
                <Loader
                  size={40}
                  color={"green"}
                  type={"CircleLoader"}
                  loaded={false}
                  theme={THEME}
                />
              </div>
            </td>
            <td>
              <div style={{ height: "100px", position: "relative" }}>
                <Loader
                  size={30}
                  color={"blue"}
                  type={"BeatLoader"}
                  loaded={false}
                  theme={THEME}
                />
              </div>
            </td>
            <td>
              <div style={{ height: "100px", position: "relative" }}>
                <Loader
                  size={20}
                  color={"#8a006b"}
                  type={"GridLoader"}
                  loaded={false}
                  theme={THEME}
                />
              </div>
            </td>
            <td>
              <div style={{ height: "100px", position: "relative" }}>
                <Loader
                  size={50}
                  type={"HashLoader"}
                  loaded={false}
                  theme={THEME}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <a href={"https://www.davidhu.io/react-spinners"} target={"_blank"}>
        Full DEMO Here (Credit: davidhu2000)
      </a>
    </div>
  ),
  Example: `
  import { Loader } from "arclight-react";

  <Loader
    color={"green"} // If undefined, will inherit color from theme
    size={60}
    type={"ClipLoader"}
    loaded={false} // If undefined, will replace itself when child has mounted
    theme={THEME} />

  `,
});
