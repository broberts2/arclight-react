import React, { useState } from "react";
import { HoverCard, Img } from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <HoverCard
      onClick={(boolean) => console.log(`Hovering: ${boolean}`)}
      onHover={() => console.log("hovered")}
      onExit={() => console.log("exited")}
      theme={theme[THEME].complement}
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
  ),
  Example: `
  import { HoverCard } from "arclight-react";

  <HoverCard
    onClick={(boolean) => console.log(boolean)}
    onHover={() => console.log("hovered")}
    onExit={() => console.log("exited")}
    theme={theme[THEME].complement}
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
});
