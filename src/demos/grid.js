import React, { useState } from "react";
import { Grid, Img, HoverCard } from "../components/index";

export default {
  Component: (
    <Grid
      theme={"dark"}
      search={true}
      itemsPerRow={6}
      height={"600px"}
      filtersRight
      filters={[
        {
          display: <Img src={require("../fire.png")} />,
          active: true,
          onClick: (filter) => console.log(filter.active),
        },
        {
          display: <Img src={require("../fire.png")} />,
          active: true,
          onClick: (filter) => console.log(filter.active),
        },
        {
          display: <Img src={require("../fire.png")} />,
          active: true,
          onClick: (filter) => console.log(filter.active),
        },
      ]}
      previewItem={
        <Img
          src={require("../Azir_4.jpg")}
          width={"100%"}
          height={"500px"}
          style={{ borderRadius: "4px" }}
        />
      }
      items={(() => {
        let hoverId = -1;
        let arr = [];
        for (let i = 0; i < 130; i++) {
          arr.push(
            <HoverCard
              onClick={() => console.log("shalom")}
              onHover={() => console.log("hovered")}
              onExit={() => console.log("exited")}
              theme={"dark"}
              showBorder={false}
              size={{ width: "100%", height: "175px" }}
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
                  src={require("../Azir_4.jpg")}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: "4px",
                  }}
                />
              }
            />
          );
        }
        return arr;
      })()}
    />
  ),
  Example: `
  import { Grid } from "arclight-react";

  <Grid
    theme={"dark"}
    search={true}
    itemsPerRow={6}
    height={"600px"}
    filtersRight
    filters={[
      {
        display: <Img src={require("../fire.png")} />,
        active: true,
        onClick: (filter) => console.log(filter.active),
      },
      {
        display: <Img src={require("../fire.png")} />,
        active: true,
        onClick: (filter) => console.log(filter.active),
      },
      {
        display: <Img src={require("../fire.png")} />,
        active: true,
        onClick: (filter) => console.log(filter.active),
      },
    ]}
    previewItem={
      <Img
        src={require("../Azir_4.jpg")}
        width={"100%"}
        height={"500px"}
        style={{ borderRadius: "4px" }}
      />
    }
    items={(() => {
      let hoverId = -1;
      let arr = [];
      for (let i = 0; i < 130; i++) {
        arr.push(
          <HoverCard
            onClick={() => console.log("shalom")}
            onHover={() => console.log("hovered")}
            onExit={() => console.log("exited")}
            theme={"dark"}
            showBorder={false}
            size={{ width: "100%", height: "175px" }}
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
                src={require("../Azir_4.jpg")}
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "4px",
                }}
              />
            }
          />
        );
      }
      return arr;
    })()}
  />
  `,
};
