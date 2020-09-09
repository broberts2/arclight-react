import React, { useState } from "react";
import { Grid, Img, HoverCard } from "../components/index";

const DEMO_ARRAY = (() => {
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
})();

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
      items={DEMO_ARRAY}
    />
  ),
  Example: `
  import { Grid } from "arclight-react";

  const DEMO_ARRAY = (() => {
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
  })();

  <Grid
    theme={"dark"} // Component color theme.
    search={true} // Should include a search component.
    itemsPerRow={6} // How many items should be spread across a given row.
    height={"600px"} // Height of the scrollable grid.
    filtersRight // Specifies that search filters should be on the right of the search component.
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
    ]} // If present, will show filters on the left side of the search component by default.
    previewItem={
      <Img
        src={require("../Azir_4.jpg")}
        width={"100%"}
        height={"500px"}
        style={{ borderRadius: "4px" }}
      />
    } // If 'previewItem' is missing, grid will not display left-most image.
    items={DEMO_ARRAY}
  />
  `,
};
