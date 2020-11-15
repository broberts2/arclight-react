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
        Mercury: {
          img: require("../planet1.png"),
          yAxis: "Arbitrary Y",
          xAxis: "Millenia",
          data: _dummydatagen_.randomized(60),
        },
        Venus: {
          img: require("../planet2.png"),
          yAxis: "Arbitrary Y",
          xAxis: "Millenia",
          data: _dummydatagen_.randomized(60),
        },
        Earth: {
          img: require("../planet3.png"),
          yAxis: "Arbitrary Y",
          xAxis: "Millenia",
          data: _dummydatagen_.randomized(60),
        },
        Mars: {
          img: require("../planet4.png"),
          yAxis: "Arbitrary Y",
          xAxis: "Millenia",
          data: _dummydatagen_.randomized(60),
        },
        Jupiter: {
          img: require("../planet5.png"),
          yAxis: "Arbitrary Y",
          xAxis: "Millenia",
          data: _dummydatagen_.randomized(60),
        },
      }}
    />
  ),
  Example: `
  import { LineChart } from "arclight-react";

  // For demonstration purposes a random generation function supplies the object array here.
  // Typical series formatting will be: [{ x: <num>, y: <num>}] in place of '_dummydatagen_.randomized(60)'.

  <LineChart
    theme={theme[THEME].complement}
    hideSeriesSelection={false}
    decimal={1}
    showAxis={true}
    showGridLines={false}
    height={325}
    dataTableColumns={4}
    data={{
      Mercury: {
        img: require("../planet1.png"),
        yAxis: "Arbitrary Y",
        xAxis: "Millenia",
        data: _dummydatagen_.randomized(60),
      },
      Venus: {
        img: require("../planet2.png"),
        yAxis: "Arbitrary Y",
        xAxis: "Millenia",
        data: _dummydatagen_.randomized(60),
      },
      Earth: {
        img: require("../planet3.png"),
        yAxis: "Arbitrary Y",
        xAxis: "Millenia",
        data: _dummydatagen_.randomized(60),
      },
      Mars: {
        img: require("../planet4.png"),
        yAxis: "Arbitrary Y",
        xAxis: "Millenia",
        data: _dummydatagen_.randomized(60),
      },
      Jupiter: {
        img: require("../planet5.png"),
        yAxis: "Arbitrary Y",
        xAxis: "Millenia",
        data: _dummydatagen_.randomized(60),
      },
    }}
  />
  `,
});
