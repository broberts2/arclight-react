import React, { useState } from "react";
import { Table, Img, DoughnutChart, LineChart } from "../components/index";
import _dummydatagen_ from "../_dummydatagen_";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <Table
      animation={"fadeInLeft"}
      theme={theme[THEME].complement}
      title={"Game Statistics"}
      filtersRight={false}
      filters={[
        {
          display: <Img src={require("../Position_Gold-Top.png")} />,
          active: true,
          onClick: (filter) => console.log(filter.active),
        },
        {
          display: <Img src={require("../Position_Gold-Jungle.png")} />,
          active: true,
          onClick: (filter) => console.log(filter.active),
        },
        {
          display: <Img src={require("../Position_Gold-Mid.png")} />,
          active: true,
          onClick: (filter) => console.log(filter.active),
        },
        {
          display: <Img src={require("../Position_Gold-Bot.png")} />,
          active: true,
          onClick: (filter) => console.log(filter.active),
        },
        {
          display: <Img src={require("../Position_Gold-Support.png")} />,
          active: true,
          onClick: (filter) => console.log(filter.active),
        },
      ]}
      headCells={[
        {
          id: "name",
          numeric: false,
          disablePadding: true,
          label: "Summoner",
        },
        {
          id: "kills",
          numeric: true,
          disablePadding: false,
          label: "Kills",
        },
        { id: "deaths", numeric: true, disablePadding: false, label: "Deaths" },
        {
          id: "assists",
          numeric: true,
          disablePadding: false,
          label: "Assists",
        },
        {
          id: "creepscore",
          numeric: true,
          disablePadding: false,
          label: "Creep Score",
        },
        {
          id: "cspm",
          numeric: true,
          disablePadding: false,
          label: "CS Per Minute",
        },
      ]}
      rows={[
        {
          name: "Jetgorilla",
          kills: 11,
          deaths: 1,
          assists: 9,
          creepscore: 310,
          cspm: 8.1,
          __collapse__: (
            <table width={"100%"}>
              <tbody>
                <tr>
                  <td>
                    <DoughnutChart
                      hideSeriesSelection={false}
                      theme={theme[THEME].complement}
                      defaultUnit={"cspm"}
                      data={{
                        "Masterful Jetgorilla": {
                          value: 100,
                          img: require("../Azir.png"),
                          unit: "units",
                        },
                        Khyroe: {
                          value: 10,
                          img: require("../Blitzcrank.png"),
                        },
                        Major: { value: 25, img: require("../Malzahar.png") },
                        Braer: { value: 50, img: require("../Yorick.png") },
                        Phortwenty: {
                          value: 90,
                          img: require("../JarvanIV.png"),
                        },
                      }}
                      radius={125}
                      width={22.5}
                      padAngle={2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <LineChart
                      theme={THEME}
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
                  </td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          name: "Phortwenty",
          kills: 4,
          deaths: 3,
          assists: 14,
          creepscore: 240,
          cspm: 6.7,
        },
        {
          name: "Major",
          kills: 4,
          deaths: 8,
          assists: 6,
          creepscore: 205,
          cspm: 5.9,
        },
        {
          name: "Braer",
          kills: 2,
          deaths: 5,
          assists: 2,
          creepscore: 187,
          cspm: 7,
        },
        {
          name: "Khyroe",
          kills: 0,
          deaths: 7,
          assists: 16,
          creepscore: 49,
          cspm: 4.1,
        },
      ]}
    />
  ),
  Example: `
  import { Table } from "arclight-react";

  <Table
    animation={"fadeInLeft"}
    theme={theme[THEME].complement}
    title={"Game Statistics"}
    filtersRight={false}
    filters={[
      {
        display: <Img src={require("../Position_Gold-Top.png")} />,
        active: true,
        onClick: (filter) => console.log(filter.active),
      },
      {
        display: <Img src={require("../Position_Gold-Jungle.png")} />,
        active: true,
        onClick: (filter) => console.log(filter.active),
      },
      {
        display: <Img src={require("../Position_Gold-Mid.png")} />,
        active: true,
        onClick: (filter) => console.log(filter.active),
      },
      {
        display: <Img src={require("../Position_Gold-Bot.png")} />,
        active: true,
        onClick: (filter) => console.log(filter.active),
      },
      {
        display: <Img src={require("../Position_Gold-Support.png")} />,
        active: true,
        onClick: (filter) => console.log(filter.active),
      },
    ]}
    headCells={[
      {
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "Summoner",
      },
      {
        id: "kills",
        numeric: true,
        disablePadding: false,
        label: "Kills",
      },
      { id: "deaths", numeric: true, disablePadding: false, label: "Deaths" },
      {
        id: "assists",
        numeric: true,
        disablePadding: false,
        label: "Assists",
      },
      {
        id: "creepscore",
        numeric: true,
        disablePadding: false,
        label: "Creep Score",
      },
      {
        id: "cspm",
        numeric: true,
        disablePadding: false,
        label: "CS Per Minute",
      },
    ]}
    rows={[
      {
        name: "Jetgorilla",
        kills: 11,
        deaths: 1,
        assists: 9,
        creepscore: 310,
        cspm: 8.1,
        __collapse__: (
          <table width={"100%"}>
            <tbody>
              <tr>
                <td>
                  <DoughnutChart
                    hideSeriesSelection={false}
                    theme={theme[THEME].complement}
                    defaultUnit={"cspm"}
                    data={{
                      "Masterful Jetgorilla": {
                        value: 100,
                        img: require("../Azir.png"),
                        unit: "units",
                      },
                      Khyroe: {
                        value: 10,
                        img: require("../Blitzcrank.png"),
                      },
                      Major: { value: 25, img: require("../Malzahar.png") },
                      Braer: { value: 50, img: require("../Yorick.png") },
                      Phortwenty: {
                        value: 90,
                        img: require("../JarvanIV.png"),
                      },
                    }}
                    radius={125}
                    width={22.5}
                    padAngle={2}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <LineChart
                    theme={THEME}
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
                </td>
              </tr>
            </tbody>
          </table>
        ),
      },
      {
        name: "Phortwenty",
        kills: 4,
        deaths: 3,
        assists: 14,
        creepscore: 240,
        cspm: 6.7,
      },
      {
        name: "Major",
        kills: 4,
        deaths: 8,
        assists: 6,
        creepscore: 205,
        cspm: 5.9,
      },
      {
        name: "Braer",
        kills: 2,
        deaths: 5,
        assists: 2,
        creepscore: 187,
        cspm: 7,
      },
      {
        name: "Khyroe",
        kills: 0,
        deaths: 7,
        assists: 16,
        creepscore: 49,
        cspm: 4.1,
      },
    ]}
  />
  `,
});
