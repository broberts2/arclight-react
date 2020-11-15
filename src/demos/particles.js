import React, { useState } from "react";
import { Particles } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <div style={{ position: "relative" }}>
      <h1
        style={{
          color: theme[THEME].textColor,
          position: "absolute",
          pointerEvents: "none",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        CLICK ME
      </h1>
      <Particles
        width={null}
        height={null}
        animations={[]}
        onClickAnimation={{
          name: "cubeExplode",
          particleColor: `${theme[THEME].textColor}`,
        }}
        invoke={false}
      />
    </div>
  ),
  Example: `
  import { Particles } from "arclight-react";

  <Particles
    width={null}
    height={null}
    animations={[
      { name: "spiritual", particleColor: "#6f0067", x: 35, y: 100 },
      { name: "spiritual", particleColor: "#6f0067", x: 65, y: 100 },
      { name: "spiritual", particleColor: "#6f0067", x: 50, y: 80 },
    ]}
    onClickAnimation={{
      name: "cubeExplode",
      particleColor: randHex, randHex, randHex,
    }}
    invoke={false}
  />
  `,
});
