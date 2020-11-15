import React, { useState } from "react";
import {
  Table,
  Img,
  DoughnutChart,
  LineChart,
  MediaCycler,
} from "../components/index";
import _dummydatagen_ from "../_dummydatagen_";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <Table
      search={"75%"}
      animation={"fadeInLeft"}
      theme={theme[THEME].complement}
      title={
        <table>
          <tbody>
            <tr>
              <td>
                <MediaCycler
                  randomize={true}
                  trans={null}
                  width={"75px"}
                  height={"75px"}
                  type={"img"}
                  elements={[
                    require("../planet1.png"),
                    require("../planet2.png"),
                    require("../planet3.png"),
                    require("../planet4.png"),
                    require("../planet5.png"),
                    require("../planet6.png"),
                    require("../planet7.png"),
                    require("../planet8.png"),
                    require("../planet9.png"),
                    require("../planet10.png"),
                  ]}
                  interval={3}
                  elementTransition={{
                    transIn: { animation: "fadeIn", duration: 2 },
                    transOut: { animation: "fadeOut", duration: 2 },
                  }}
                />
              </td>
              <td>
                <h2>
                  <i>Solar System Data</i>
                </h2>
              </td>
            </tr>
          </tbody>
        </table>
      }
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
          label: "Celestial Body",
        },
        {
          id: "diameter",
          numeric: true,
          disablePadding: false,
          label: "Diameter (mi)",
        },
        {
          id: "mass",
          numeric: true,
          disablePadding: false,
          label: "Mass (kg)",
        },
        {
          id: "distance",
          numeric: true,
          disablePadding: false,
          label: "Distance from Sun (million km)",
        },
        {
          id: "albedo",
          numeric: true,
          disablePadding: false,
          label: "Albedo",
        },
        {
          id: "gravity",
          numeric: true,
          disablePadding: false,
          label: "Gravitational Pull (m/s^2)",
        },
      ]}
      rows={[
        {
          name: "Earth",
          mass: 5.97219,
          diameter: 7917.5,
          distance: 9.27,
          albedo: 0.3,
          gravity: 9.807,
          __collapse__: (
            <table width={"100%"}>
              <tbody>
                <tr>
                  <td>
                    <h3>Total Mass Distribution by Body (M)</h3>
                    <DoughnutChart
                      hideSeriesSelection={false}
                      theme={theme[THEME].complement}
                      defaultUnit={"M"}
                      data={{
                        Mercury: {
                          value: 0.055,
                          img: require("../planet1.png"),
                        },
                        Venus: {
                          value: 0.815,
                          img: require("../planet2.png"),
                        },
                        Earth: {
                          value: 1,
                          img: require("../planet3.png"),
                        },
                        Mars: {
                          value: 0.107,
                          img: require("../planet4.png"),
                        },
                        Jupiter: {
                          value: 317.8,
                          img: require("../planet5.png"),
                        },
                        Saturn: {
                          value: 95.16,
                          img: require("../planet6.png"),
                        },
                        Uranus: {
                          value: 14.54,
                          img: require("../planet7.png"),
                        },
                        Neptune: {
                          value: 17.15,
                          img: require("../planet8.png"),
                        },
                      }}
                      radius={150}
                      width={22.5}
                      padAngle={2}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          name: "Juptiter",
          mass: 5.97219,
          diameter: 7917.5,
          distance: 9.27,
          albedo: 0.3,
          gravity: 9.807,
        },
        {
          name: "Pluto",
          mass: 5.97219,
          diameter: 7917.5,
          distance: 9.27,
          albedo: 0.3,
          gravity: 9.807,
        },
        {
          name: "Saturn",
          mass: 5.97219,
          diameter: 7917.5,
          distance: 9.27,
          albedo: 0.3,
          gravity: 9.807,
        },
        {
          name: "Mercury",
          mass: 5.97219,
          diameter: 7917.5,
          distance: 9.27,
          albedo: 0.3,
          gravity: 9.807,
        },
        {
          name: "Venus",
          mass: 5.97219,
          diameter: 7917.5,
          distance: 9.27,
          albedo: 0.3,
          gravity: 9.807,
        },
        {
          name: "Mars",
          mass: 5.97219,
          diameter: 7917.5,
          distance: 9.27,
          albedo: 0.3,
          gravity: 9.807,
        },
      ]}
    />
  ),
  Example: `
  import { Table } from "arclight-react";

  <Table
    search={"75%"}
    animation={"fadeInLeft"}
    theme={theme[THEME].complement}
    title={
      <table>
        <tbody>
          <tr>
            <td>
              <MediaCycler
                randomize={true}
                trans={null}
                width={"75px"}
                height={"75px"}
                type={"img"}
                elements={[
                  require("../planet1.png"),
                  require("../planet2.png"),
                  require("../planet3.png"),
                  require("../planet4.png"),
                  require("../planet5.png"),
                  require("../planet6.png"),
                  require("../planet7.png"),
                  require("../planet8.png"),
                  require("../planet9.png"),
                  require("../planet10.png"),
                ]}
                interval={3}
                elementTransition={{
                  transIn: { animation: "fadeIn", duration: 2 },
                  transOut: { animation: "fadeOut", duration: 2 },
                }}
              />
            </td>
            <td>
              <h2>
                <i>Solar System Data</i>
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
    }
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
        label: "Celestial Body",
      },
      {
        id: "diameter",
        numeric: true,
        disablePadding: false,
        label: "Diameter (mi)",
      },
      {
        id: "mass",
        numeric: true,
        disablePadding: false,
        label: "Mass (kg)",
      },
      {
        id: "distance",
        numeric: true,
        disablePadding: false,
        label: "Distance from Sun (million km)",
      },
      {
        id: "albedo",
        numeric: true,
        disablePadding: false,
        label: "Albedo",
      },
      {
        id: "gravity",
        numeric: true,
        disablePadding: false,
        label: "Gravitational Pull (m/s^2)",
      },
    ]}
    rows={[
      {
        name: "Earth",
        mass: 5.97219,
        diameter: 7917.5,
        distance: 9.27,
        albedo: 0.3,
        gravity: 9.807,
        __collapse__: (
          <table width={"100%"}>
            <tbody>
              <tr>
                <td>
                  <h3>Total Mass by Body</h3>
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
            </tbody>
          </table>
        ),
      },
      {
        name: "Juptiter",
        mass: 5.97219,
        diameter: 7917.5,
        distance: 9.27,
        albedo: 0.3,
        gravity: 9.807,
      },
      {
        name: "Pluto",
        mass: 5.97219,
        diameter: 7917.5,
        distance: 9.27,
        albedo: 0.3,
        gravity: 9.807,
      },
      {
        name: "Saturn",
        mass: 5.97219,
        diameter: 7917.5,
        distance: 9.27,
        albedo: 0.3,
        gravity: 9.807,
      },
      {
        name: "Mercury",
        mass: 5.97219,
        diameter: 7917.5,
        distance: 9.27,
        albedo: 0.3,
        gravity: 9.807,
      },
      {
        name: "Venus",
        mass: 5.97219,
        diameter: 7917.5,
        distance: 9.27,
        albedo: 0.3,
        gravity: 9.807,
      },
      {
        name: "Mars",
        mass: 5.97219,
        diameter: 7917.5,
        distance: 9.27,
        albedo: 0.3,
        gravity: 9.807,
      },
    ]}
  />
  `,
});
