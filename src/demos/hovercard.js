import React, { useState } from "react";
import { HoverCard, Img } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <table width={"100%"}>
      <tbody>
        <tr>
          <td align="center">
            <HoverCard
              onClick={(boolean) => console.log(`Hovering: ${boolean}`)}
              onHover={() => console.log("hovered")}
              onExit={() => console.log("exited")}
              theme={theme[THEME].complement}
              size={{ width: "150px", height: "200px" }}
              front={
                <Img
                  src={require("../front.png")}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: "4px",
                  }}
                />
              }
              back={
                <Img
                  src={require("../back_3.jpg")}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: "4px",
                  }}
                />
              }
            />
          </td>
          <td align="center">
            <HoverCard
              onClick={(boolean) => console.log(`Hovering: ${boolean}`)}
              onHover={() => console.log("hovered")}
              onExit={() => console.log("exited")}
              theme={theme[THEME].complement}
              size={{ width: "200px", height: "300px" }}
              front={
                <Img
                  src={require("../front.png")}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: "4px",
                  }}
                />
              }
              back={
                <Img
                  src={require("../back_2.jpg")}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: "4px",
                  }}
                />
              }
            />
          </td>
          <td align="center">
            <HoverCard
              onClick={(boolean) => console.log(`Hovering: ${boolean}`)}
              onHover={() => console.log("hovered")}
              onExit={() => console.log("exited")}
              theme={theme[THEME].complement}
              size={{ width: "250px", height: "400px" }}
              front={
                <Img
                  src={require("../front.png")}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: "4px",
                  }}
                />
              }
              back={
                <Img
                  src={require("../back.png")}
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
    onClick={(boolean) => console.log("click event!")}
    onHover={() => console.log("hovered")}
    onExit={() => console.log("exited")}
    theme={theme[THEME].complement}
    size={{ width: "150px", height: "200px" }}
    front={
      <Img
        src={require("../front.png")}
        width={"100%"}
        height={"100%"}
        style={{
          borderRadius: "4px",
        }}
      />
    }
    back={
      <Img
        src={require("../back.png")}
        width={"100%"}
        height={"100%"}
        style={{
          borderRadius: "4px",
        }}
      />
    }
  />
  `,
});
