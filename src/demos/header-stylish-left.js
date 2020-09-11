import React, { useState } from "react";
import {
  Header,
  Particles,
  Button,
  FontAwesomeIcon,
  Transition,
} from "../components/index";
import theme from "../components/themes";

export default (THEME) => ({
  Component: (
    <div style={{ position: "relative", height: "300px" }}>
      <Header
        name={"StylishLeft"}
        textDisplay={{ left: null, center: null, right: null }}
        theme={THEME}
        info={{
          width: "100%",
          height: "300px",
          crown: (
            <Transition trans={{ animation: "fadeIn", delay: 1.25 }}>
              <div
                style={{
                  position: "relative",
                  width: "125px",
                  height: "150px",
                }}
              >
                <img
                  src={require("../spirit-flower.png")}
                  style={{ height: "150px" }}
                />
                <div style={{ position: "absolute", top: -85, left: -55 }}>
                  <Particles
                    width={300}
                    height={200}
                    animations={[
                      {
                        name: "spiritual",
                        particleColor: "#00fff0",
                        x: 50,
                        y: 100,
                      },
                    ]}
                    invoke={false}
                  />
                </div>
              </div>
            </Transition>
          ),
        }}
        controls={[
          <Button
            trans={{ animation: "fadeInLeft", delay: 1 }}
            theme={theme[THEME].complement}
            pop
            onClick={() => console.log("I've been clicked!")}
          >
            <FontAwesomeIcon theme={theme[THEME].complement} icon={"signOut"} />
            Sign Out
          </Button>,
          <Button
            trans={{ animation: "fadeInLeft", delay: 1 }}
            theme={theme[THEME].complement}
            pop
            onClick={() => console.log("I've been clicked!")}
          >
            News
          </Button>,
          <Button
            trans={{ animation: "fadeInLeft", delay: 1 }}
            theme={theme[THEME].complement}
            pop
            onClick={() => console.log("I've been clicked!")}
          >
            Home
          </Button>,
        ]}
      />
    </div>
  ),
  Example: `
  import { Header } from "arclight-react";

  <Header
    name={"StylishLeft"}
    theme={THEME}
    info={{
      width: "100%",
      height: "300px",
      crown: (
        <Transition trans={{ animation: "fadeIn", delay: 1.25 }}>
          <div
            style={{
              position: "relative",
              width: "125px",
              height: "150px",
            }}
          >
            <img
              src={require("../spirit-flower.png")}
              style={{ height: "150px" }}
            />
            <div style={{ position: "absolute", top: -85, left: -55 }}>
              <Particles
                width={300}
                height={200}
                animations={[
                  {
                    name: "spiritual",
                    particleColor: "#00fff0",
                    x: 50,
                    y: 100,
                  },
                ]}
                invoke={false}
              />
            </div>
          </div>
        </Transition>
      ),
    }}
    controls={[
      <Button
        trans={{ animation: "fadeInLeft", delay: 1 }}
        theme={theme[THEME].complement}
        pop
        onClick={() => console.log("I've been clicked!")}
      >
        <FontAwesomeIcon theme={theme[THEME].complement} icon={"signOut"} />
        Sign Out
      </Button>,
      <Button
        trans={{ animation: "fadeInRight", delay: 0.75 }}
        theme={theme[THEME].complement}
        pop
        onClick={() => console.log("I've been clicked!")}
      >
        <FontAwesomeIcon theme={theme[THEME].complement} icon={"twitch"} />
      </Button>,
      <Button
        trans={{ animation: "fadeInLeft", delay: 0.75 }}
        theme={theme[THEME].complement}
        pop
        onClick={() => console.log("I've been clicked!")}
      >
        Click Me 2!
      </Button>,
      <Button
        trans={{ animation: "fadeInRight", delay: 0.5 }}
        theme={theme[THEME].complement}
        pop
        onClick={() => console.log("I've been clicked!")}
      >
        <FontAwesomeIcon theme={theme[THEME].complement} icon={"discord"} />
      </Button>,
      <Button
        trans={{ animation: "fadeInLeft", delay: 0.5 }}
        theme={theme[THEME].complement}
        pop
        onClick={() => console.log("I've been clicked!")}
      >
        Click Me 4!
      </Button>,
      <Button
        trans={{ animation: "fadeInRight", delay: 0.5 }}
        theme={theme[THEME].complement}
        pop
        onClick={() => console.log("I've been clicked!")}
      >
        <FontAwesomeIcon theme={theme[THEME].complement} icon={"reddit"} />
      </Button>,
      <div />,
      <Button
      size={6}
        trans={{ animation: "fadeInRight", delay: 0.5 }}
        theme={theme[THEME].complement}
        pop
        onClick={() => console.log("I've been clicked!")}
      >
        <FontAwesomeIcon theme={theme[THEME].complement} icon={"youtube"} />
      </Button>,
      <div />,
      <Button
        trans={{ animation: "fadeInRight", delay: 0.5 }}
        theme={theme[THEME].complement}
        pop
        onClick={() => console.log("I've been clicked!")}
      >
        <FontAwesomeIcon theme={theme[THEME].complement} icon={"twitter"} />
      </Button>,
      <div />,
      <Button
        trans={{ animation: "fadeInRight", delay: 0.5 }}
        theme={theme[THEME].complement}
        pop
        onClick={() => console.log("I've been clicked!")}
      >
        <FontAwesomeIcon
          theme={theme[THEME].complement}
          icon={"facebook"}
        />
      </Button>,
    ]}
  />
  `,
});
