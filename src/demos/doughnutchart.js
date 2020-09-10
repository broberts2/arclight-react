import React, { useState } from "react";
import { DoughnutChart } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
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
  ),
  Example: `
  import { Doughnutchart } from "arclight-react";

  <DoughnutChart
    hideSeriesSelection={false}
    theme={"dark"}
    defaultUnit={"cspm"} // Will be used if 'unit' is not applied to a child object of the data prop.
    data={{
      "Masterful Jetgorilla": {
        value: 100,
        img: require("../Azir.png"),
        unit: "units"
      },
      Khyroe: { value: 10, img: require("../Blitzcrank.png") },
      Major: { value: 25, img: require("../Malzahar.png") },
      Braer: { value: 50, img: require("../Yorick.png") },
      Phortwenty: {
        value: 90,
        img: require("../JarvanIV.png"),
      },
    }}
    radius={150} // Effective size of the chart.
    width={22.5} // Size of the wedges.
    padAngle={2} // Space between wedges.
  />
  `,
});
