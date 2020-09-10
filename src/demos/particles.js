import React, { useState } from "react";
import { Particles } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <React.Fragment>
      <Particles
        width={1000}
        height={300}
        animations={[
          { name: "spiritual", particleColor: "#eb00ff", x: 35, y: 100 },
          { name: "spiritual", particleColor: "#e3ff00", x: 65, y: 100 },
          { name: "spiritual", particleColor: "#00b2ff", x: 50, y: 80 },
        ]}
        onClickAnimation={{
          name: "cubeExplode",
          particleColor: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
            Math.random() * 255
          )},${Math.floor(Math.random() * 255)})`,
        }}
        invoke={false}
      />
    </React.Fragment>
  ),
  Example: `
  import { Particles } from "arclight-react";

  <React.Fragment>
    <Particles
      width={1000}
      height={300}
      animations={[
        { name: "spiritual", particleColor: "#eb00ff", x: 35, y: 100 },
        { name: "spiritual", particleColor: "#e3ff00", x: 65, y: 100 },
        { name: "spiritual", particleColor: "#00b2ff", x: 50, y: 80 },
      ]}
      onClickAnimation={{
        name: "cubeExplode",
        particleColor: ${"`rgb(Math.floor(Math.random() * 255), rgb(Math.floor(Math.random() * 255), rgb(Math.floor(Math.random() * 255)`"},
      }}
      invoke={false}
    />
  </React.Fragment>
  `,
});
