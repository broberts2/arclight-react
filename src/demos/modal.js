import React, { useState } from "react";
import {
  Modal,
  Button,
  Particles,
  TextArea,
  Grid,
  Img,
} from "../components/index";
import theme from "../components/themes";
import story from "../_story_";

const DEMO_ARRAY = (THEME) => {
  let hoverId = -1;
  let arr = [];
  for (let i = 0; i < 70; i++) {
    arr.push(<img src={require("../tile.png")} width={"100%"} />);
  }
  return arr;
};

const _Modal_ = (props) => {
  const [modal, showModal] = React.useState(false);
  return (
    <div>
      <Button
        pop
        theme={theme[props.THEME].complement}
        onClick={() => showModal(!modal)}
      >
        Click Me!
      </Button>
      <Modal
        theme={props.THEME}
        visible={modal}
        disableClickAway
        crown={{
          position: "right",
          constrain: false,
          content: (
            <div>
              <img src={require("../spirit-flower.png")} />
              <div style={{ position: "absolute", top: -55, left: -55 }}>
                <Particles
                  width={300}
                  height={300}
                  animations={[
                    {
                      name: "spiritual",
                      particleColor: "#00fff0",
                      x: 50,
                      y: 50,
                    },
                  ]}
                  invoke={false}
                />
              </div>
            </div>
          ),
        }}
        setVisible={(a) => showModal(a)}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <Grid
            theme={theme[props.THEME].complement}
            search={"75%"}
            itemsPerRow={8}
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
            items={DEMO_ARRAY(props.THEME)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default (THEME) => ({
  Component: <_Modal_ THEME={THEME} />,
  Example: `
  import { Modal } from "arclight-react";

  // const [modal, showModal] = React.useState(false);
  <Modal
    theme={THEME}
    visible={modal}
    disableClickAway
    crown={{
      position: "right",
      constrain: false,
      content: (
        <div>
          <img src={require("../spirit-flower.png")} />
          <div style={{ position: "absolute", top: -55, left: -55 }}>
            <Particles
              width={300}
              height={300}
              animations={[
                {
                  name: "spiritual",
                  particleColor: "#00fff0",
                  x: 50,
                  y: 50,
                },
              ]}
              invoke={false}
            />
          </div>
        </div>
      ),
    }}
    setVisible={(a) => showModal(a)}
  >
    <div
      style={{ width: "100%", height: "100%", backgroundColor: "blue" }}
    />
  </Modal>
  `,
});
