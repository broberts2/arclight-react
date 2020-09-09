import React, { useState } from "react";
import { HoverCard, Img } from "../components/index";

export default {
  Component: (
    <table>
      <tbody>
        <tr>
          <td>
            <HoverCard
              onClick={() => console.log("hello")}
              onHover={() => console.log("hovered")}
              onExit={() => console.log("exited")}
              theme={"dark"}
              showBorder={false}
              size={{ width: "250px", height: "400px" }}
              front={
                <Img
                  src={require("../Azir_4.jpg")}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: "4px",
                  }}
                />
              }
              back={
                <Img
                  src={require("../Azir_Loading.jpg")}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: "4px",
                  }}
                />
              }
            />
          </td>
          <td>
            <HoverCard
              onClick={() => console.log("hello")}
              onHover={() => console.log("hovered")}
              onExit={() => console.log("exited")}
              theme={"crimson"}
              showBorder={true}
              size={{ width: "250px", height: "400px" }}
              front={
                <Img
                  src={require("../Azir_4.jpg")}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: "4px",
                  }}
                />
              }
              back={
                <Img
                  src={require("../Azir_Loading.jpg")}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: "4px",
                  }}
                />
              }
            />
          </td>
        </tr>
      </tbody>
    </table>
  ),
  Example: `
  import { HoverCard } from "arclight-react";

  <HoverCard
    onClick={() => console.log("hello")}
    onHover={() => console.log("hovered")}
    onExit={() => console.log("exited")}
    theme={"dark"}
    showBorder={false}
    size={{ width: "250px", height: "400px" }}
    front={
      <Img
        src={require("../Azir_4.jpg")}
        width={"100%"}
        height={"100%"}
        style={{
          borderRadius: "4px",
        }}
      />
    }
    back={
      <Img
        src={require("../Azir_Loading.jpg")}
        width={"100%"}
        height={"100%"}
        style={{
          borderRadius: "4px",
        }}
      />
    }
  />
  `,
};
