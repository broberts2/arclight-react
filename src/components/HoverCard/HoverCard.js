import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Transition } from "../index";
import theme from "../themes";

const HoverCard = styled.div`
  ${(props) => (props.onClick ? "cursor: pointer;" : null)}
  background-color: transparent;
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  perspective: 1000px;
  margin: 0px;
`;

const FlipCardInner = styled.div`
  position: relative;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  & img {
    max-width: 100%;
    max-height: 100%;
  }
  background-color: transparent;
`;

const FlipCardFront = styled.div`
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: ${(props) => theme[props.theme].backgroundColor};
  color: ${(props) => theme[props.theme].textColor};
`;

const FlipCardBack = styled.div`
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: ${(props) => theme[props.theme].backgroundColor};
  color: ${(props) => theme[props.theme].textColor};
  transform: rotateY(180deg);
`;

const FlipCardBackBorder = styled.div`
  background-color: transparent;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 99%;
  height: 99%;
  border: ${(props) => `3px solid ${theme[props.theme].backgroundColor}`};
  backface-visibility: hidden;
  transform: rotateY(180deg);
  z-index: 0;
`;

export default React.memo((props) => {
  const [state, setState] = React.useState({
    hovering: false,
  });
  return (
    <Transition trans={props.trans}>
      <ThemeProvider theme={theme}>
        <HoverCard
          size={props.size}
          onClick={() => (props.onClick ? props.onClick(state.hovering) : null)}
          onMouseOver={() => {
            setState({ hovering: true });
            if (props.onHover) props.onHover();
          }}
          onMouseLeave={() => {
            setState({ hovering: false });
            if (props.onExit) props.onExit();
          }}
        >
          <FlipCardInner
            style={state.hovering ? { transform: "rotateY(180deg)" } : {}}
          >
            <FlipCardFront theme={props.theme}>{props.front}</FlipCardFront>
            {props.showBorder ? (
              <FlipCardBackBorder theme={props.theme} />
            ) : null}
            <FlipCardBack theme={props.theme}>{props.back}</FlipCardBack>
          </FlipCardInner>
        </HoverCard>
      </ThemeProvider>
    </Transition>
  );
});
