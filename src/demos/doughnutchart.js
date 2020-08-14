import React, { useState } from "react";
import { DoughnutChart } from "../components/index";

export default {
  Component: (
    <DoughnutChart
      hideSeriesSelection={false}
      theme={"dark"}
      defaultUnit={"cspm"}
      data={{
        "Masterful Jetgorilla": {
          value: 100,
          img: require("../Azir.png"),
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
    defaultUnit={"cspm"}
    data={{
      "Masterful Jetgorilla": {
        value: 100,
        img: require("../Azir.png"),
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
};
