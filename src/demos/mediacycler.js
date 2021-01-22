import React, { useState } from "react";
import { MediaCycler } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <div style={{ width: "500px", height: "800px" }}>
      <MediaCycler
        preserve={false}
        randomize={true}
        trans={null}
        type={"video"}
        elements={[
          require("../video1.mp4"),
          require("../video2.mp4"),
          require("../video4.mp4")
        ]}
        interval={4}
        elementTransition={{
          transIn: { animation: "fadeIn", duration: 3 },
          transOut: { animation: "fadeOut", duration: 3 },
        }}
      />
    </div>
  ),
  Example: `
  import { MediaCycler } from "arclight-react";

  <MediaCycler
    preserve={false}
    randomize={true}
    trans={null}
    type={"video"}
    elements={[
      require("../video1.mp4"),
      require("../video2.mp4"),
      require("../video4.mp4")
    ]}
    interval={4}
    elementTransition={{
      transIn: { animation: "fadeIn", duration: 3 },
      transOut: { animation: "fadeOut", duration: 3 },
    }}
/>
  `,
});
