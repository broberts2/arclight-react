import React, { useState } from "react";
import { Grid, Img, HoverCard } from "../components/index";
import theme from "../components/themes";

const DEMO_ARRAY = (THEME) => {
  let hoverId = -1;
  let arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(<img src={require("../tile.png")} width={"100%"} />);
  }
  return arr;
};

export default (THEME) => ({
  Component: (
    <div style={{ height: "400px" }}>
      <Grid
        theme={theme[THEME].complement}
        fixed={true}
        search={"75%"}
        itemsPerRow={15}
        height={"100%"}
        filtersRight
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
        items={DEMO_ARRAY(THEME)}
      />
    </div>
  ),
  Example: `
  import { Grid } from "arclight-react";

  <Grid
    theme={theme[THEME].complement}
    fixed={true}
    search={"75%"}
    itemsPerRow={15}
    height={"100%"}
    filtersRight
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
    items={[...]}
  />
  `,
});
