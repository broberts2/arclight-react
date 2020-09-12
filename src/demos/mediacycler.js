import React, { useState } from "react";
import { MediaCycler } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <div style={{ width: "50%", height: "30vw" }}>
      <MediaCycler
        randomize={true}
        trans={null}
        width={"100%"}
        type={"video"}
        elements={[
          require("../neeko.mp4"),
          require("../leona.mp4"),
          require("../shurima.webm"),
        ]}
        interval={8}
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
    randomize={true}
    trans={null}
    width={"100%"}
    type={"video"}
    elements={[
      require("../neeko.mp4"),
      require("../leona.mp4"),
      require("../shurima.webm"),
    ]}
    interval={8}
    elementTransition={{
      transIn: { animation: "fadeIn", duration: 3 },
      transOut: { animation: "fadeOut", duration: 3 },
    }}
  />
  `,
});
