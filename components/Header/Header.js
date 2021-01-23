import React from "react";
import styled from "styled-components";
import theme from "../themes";
import { Transition } from "../index";
import StylishCenter from "./Headers/StylishCenter";
import StylishLeft from "./Headers/StylishLeft";

const Header = styled.div``;

const router = (name, textDisplay, theme, info, controls) => {
  switch (name) {
    case "StylishCenter":
      return (
        <StylishCenter
          textDisplay={textDisplay}
          theme={theme}
          width={info.width}
          height={info.height}
          crown={info.crown}
          controls={controls}
        />
      );
    case "StylishLeft":
      return (
        <StylishLeft
          textDisplay={textDisplay}
          theme={theme}
          width={info.width}
          height={info.height}
          crown={info.crown}
          controls={controls}
        />
      );
  }
};

export default React.memo((props) => {
  return (
    <Transition trans={props.trans}>
      
        <Header>
          {router(
            props.name,
            props.textDisplay,
            props.theme,
            props.info,
            props.controls
          )}
        </Header>
      
    </Transition>
  );
});
