import React, { useState } from "react";
import { ParticleContainer, Img } from "../components/index";

export default {
  Component: (
    <div style={{ paddingTop: "150px" }}>
      <table>
        <tbody>
          <tr>
            <td>
              <ParticleContainer
                hoverCursor={"pointer"}
                hoverFilter={{}}
                animations={[
                  {
                    name: "solid_smoke",
                    offsetX: "-5%",
                    offsetY: "-55%",
                    opacity: 1,
                    filter: {
                      sepia: 100,
                      brightness: 25,
                      blur: 0,
                    },
                    hoverFilter: {
                      sepia: 100,
                      brightness: 25,
                      blur: 0,
                    },
                  },
                ]}
              >
                <Img
                  src={require("../cup.png")}
                  style={{ width: "300px", height: "300px" }}
                />
              </ParticleContainer>
            </td>
            <td>
              <ParticleContainer
                hoverCursor={"pointer"}
                hoverFilter={{}}
                animations={[
                  {
                    name: "solid_smoke",
                    offsetX: "-5%",
                    offsetY: "-55%",
                    opacity: 1,
                    filter: {
                      sepia: 100,
                      brightness: 25,
                      blur: 0,
                    },
                    hoverFilter: {
                      sepia: 100,
                      brightness: 25,
                      blur: 0,
                    },
                  },
                ]}
              >
                <Img
                  src={require("../cup.png")}
                  style={{ width: "300px", height: "300px" }}
                />
              </ParticleContainer>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  Example: `
  import { ParticleContainer } from "arclight-react";

  <ParticleContainer
    hoverCursor={"pointer"}
    hoverFilter={{}}
    animations={[
      {
        name: "solid_smoke",
        offsetX: "-5%",
        offsetY: "-55%",
        opacity: 1,
        filter: {
          sepia: 100,
          brightness: 25,
          blur: 0,
        },
        hoverFilter: {
          sepia: 100,
          brightness: 25,
          blur: 0,
        },
      },
    ]}
  >
    <Img
      src={require("../cup.png")}
      style={{ width: "300px", height: "300px" }}
    />
  </ParticleContainer>
  `,
};
