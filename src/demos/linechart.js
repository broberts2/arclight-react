import React, { useState } from "react";
import { LineChart } from "../components/index";
import _dummydatagen_ from "../_dummydatagen_";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <LineChart
      theme={theme[THEME].complement}
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

  // For demonstration purposes a random generation function supplies the object array here.
  // Typical series formatting will be: [{ x: <num>, y: <num>}] in place of '_dummydatagen_.linear(60)'.

  <LineChart
    theme={theme[THEME].complement}
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
  `,
});
