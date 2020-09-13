import React, { useState } from "react";
import { Modal, Button, Particles, TextArea } from "../components/index";
import theme from "../components/themes";
import story from "../_story_";

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
        title={<h1>I am a title!</h1>}
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
        <h1 style={{ color: theme[props.THEME].textColor }}>
          <i>Azir, Emperor of Shurima</i>
        </h1>
        <TextArea
          readonly={true}
          value={story}
          height={"300px"}
          theme={theme[props.THEME].complement}
          placeholder={"Some sample text goes in here."}
          onChange={(e) => console.log(e.target.value)}
        />
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
    theme={props.THEME}
    visible={modal}
    disableClickAway
    title={<h1>I am a title!</h1>}
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
    <h1 style={{ color: theme[props.THEME].textColor }}>
      <i>Azir, Emperor of Shurima</i>
    </h1>
    <TextArea
      readonly={true}
      value={story}
      height={"300px"}
      theme={theme[props.THEME].complement}
      placeholder={"Some sample text goes in here."}
      onChange={(e) => console.log(e.target.value)}
    />
  </Modal>
  `,
});
