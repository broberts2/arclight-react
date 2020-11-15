import React, { useState } from "react";
import { VideoHover } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <div style={{ width: "300px", height: "200px" }}>
      <VideoHover
        fadeOnPause={true}
        playing={null}
        src={require("../video3.mp4")}
      />
    </div>
  ),
  Example: `
  import { VideoHover } from "arclight-react";

  <VideoHover
    fadeOnPause={true}
    playing={null} // Pass boolean if playing controlled externally
    src={require("../video3.mp4")}
  />
  `,
});
