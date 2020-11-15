import React, { useState } from "react";
import { DoughnutChart } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <DoughnutChart
      hideSeriesSelection={false}
      theme={THEME}
      defaultUnit={"Cool Units"}
      data={{
        Mercury: {
          unit: "Custom Unit",
          value: 2,
          img: require("../planet1.png"),
        },
        Venus: {
          value: 9,
          img: require("../planet2.png"),
        },
        Earth: {
          value: 7,
          img: require("../planet3.png"),
        },
        Mars: {
          value: 8,
          img: require("../planet4.png"),
        },
      }}
      radius={175}
      width={22.5}
      padAngle={2}
    />
  ),
  Example: `
  import { Doughnutchart } from "arclight-react";

  <DoughnutChart
    hideSeriesSelection={false}
    theme={THEME}
    defaultUnit={"cspm"}
    data={{
      "Masterful Jetgorilla": {
        value: 100,
        img: require("../Azir.png"),
        unit: "units",
      },
      Khyroe: { value: 10, img: require("../Blitzcrank.png") },
      Major: { value: 25, img: require("../Malzahar.png") },
      Braer: { value: 50, img: require("../Yorick.png") },
      Phortwenty: {
        value: 90,
        img: require("../JarvanIV.png"),
      },
    }}
    radius={150}
    width={22.5}
    padAngle={2}
  />
  `,
});
