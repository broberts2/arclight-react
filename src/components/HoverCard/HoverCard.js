import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../themes";

const HoverCard = styled.div`
  background-color: transparent;
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  perspective: 1000px;
  margin: 0px;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  &:hover {
    transform: rotateY(180deg);
  }
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: ${(props) => theme[props.theme].backgroundColor};
  color: ${(props) => theme[props.theme].textColor};
`;

const FlipCardBack = styled.div`
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

export default React.memo((props) => (
  <ThemeProvider theme={theme}>
    <HoverCard size={props.size}>
      <FlipCardInner
        onClick={() => (props.onClick ? props.onClick() : null)}
        onMouseOver={() => (props.onHover ? props.onHover() : null)}
        onMouseLeave={() => (props.onExit ? props.onExit() : null)}
      >
        <FlipCardFront theme={props.theme}>{props.front}</FlipCardFront>
        {props.showBorder ? <FlipCardBackBorder theme={props.theme} /> : null}
        <FlipCardBack theme={props.theme}>{props.back}</FlipCardBack>
      </FlipCardInner>
    </HoverCard>
  </ThemeProvider>
));
