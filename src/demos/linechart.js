import React, { useState } from "react";
import { LineChart } from "../components/index";
import _dummydatagen_ from "../_dummydatagen_";

export default {
  Component: (
    <LineChart
      theme={"dark"}
      hideSeriesSelection={false}
      decimal={1}
      showAxis={true}
      showGridLines={false}
      height={325}
      dataTableColumns={4}
      data={{
        Jetgorilla: {
          img: require("../Azir.png"),
          yAxis: "Creep Score",
          xAxis: "Minutes",
          data: _dummydatagen_.linear(60),
        },
        Phortwenty: {
          img: require("../JarvanIV.png"),
          yAxis: "Creep Score",
          xAxis: "Minutes",
          data: _dummydatagen_.linear(60),
        },
        Major: {
          img: require("../Malzahar.png"),
          yAxis: "Creep Score",
          xAxis: "Minutes",
          data: _dummydatagen_.linear(60),
        },
        Braer: {
          img: require("../Yorick.png"),
          yAxis: "Creep Score",
          xAxis: "Minutes",
          data: _dummydatagen_.linear(60),
        },
        Khyroe: {
          img: require("../Blitzcrank.png"),
          yAxis: "Creep Score",
          xAxis: "Minutes",
          data: _dummydatagen_.linear(60),
        },
      }}
    />
  ),
  Example: `
  import { LineChart } from "arclight-react";

  // _dummydatagen_.linear = [...{ x: m, y: n}]

  <LineChart
    theme={"dark"}
    hideSeriesSelection={false}
    decimal={1}
    showAxis={true}
    showGridLines={false}
    height={325}
    dataTableColumns={4}
    data={{
      Jetgorilla: {
        img: require("../Azir.png"), // optional
        yAxis: "Creep Score",
        xAxis: "Minutes",
        data: _dummydatagen_.linear(60),
      },
      Phortwenty: {
        img: require("../JarvanIV.png"), // optional
        yAxis: "Creep Score",
        xAxis: "Minutes",
        data: _dummydatagen_.linear(60),
      },
      Major: {
        img: require("../Malzahar.png"), // optional
        yAxis: "Creep Score",
        xAxis: "Minutes",
        data: _dummydatagen_.linear(60),
      },
      Braer: {
        img: require("../Yorick.png"), // optional
        yAxis: "Creep Score",
        xAxis: "Minutes",
        data: _dummydatagen_.linear(60),
      },
      Khyroe: {
        img: require("../Blitzcrank.png"), // optional
        yAxis: "Creep Score",
        xAxis: "Minutes",
        data: _dummydatagen_.linear(60),
      },
    }}
  />
  `,
};
