import React, { useState } from "react";
import { Particles } from "../components/index";

export default {
  Component: (
    <React.Fragment>
      <Particles
        width={1000}
        height={300}
        animations={[
          { name: "spiritual", particleColor: "#fa3da9", x: 50, y: 100 },
          { name: "cubeExplode", particleColor: "#3d72fa", x: 50, y: 50 },
        ]}
        onClickAnimation={{
          name: "cubeExplode",
          particleColor: "#fa3da9",
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
        { name: "spiritual", particleColor: "#fa3da9", x: 50, y: 100 },
        { name: "cubeExplode", particleColor: "#3d72fa", x: 50, y: 50 },
      ]}
      onClickAnimation={{
        name: "cubeExplode",
        particleColor: "#fa3da9",
      }}
      invoke={false}
    />
  </React.Fragment>
  `,
};
