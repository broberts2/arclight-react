import React, { useState } from "react";
import { Particles } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
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
        particleColor: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
          Math.random() * 255
        )},${Math.floor(Math.random() * 255)})`,
      }}
      invoke={false}
    />
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
