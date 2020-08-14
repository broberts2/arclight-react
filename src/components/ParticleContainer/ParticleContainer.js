import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../themes";
import imgColorFilter from "../imgColorFilter/imgColorFilter";
import animationIndex from "./animationIndex";

const ParticleContainer = styled.div`
  cursor: ${(props) => (props.hoverCursor ? props.hoverCursor : "inherit")};
  position: relative;
  width: ${(props) => props.children[0].props.style.width};
  height: ${(props) => props.children[0].props.style.height};
  & img {
    width: 100%;
    height: 100%;
    filter: ${(props) =>
      props.filter ? imgColorFilter(props.filter) : "none"};
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`;

const AnimationContainer = styled.div`
  width: ${(props) => (props.scaleX ? `calc(100% * ${props.scaleX})` : "100%")};
  height: ${(props) =>
    props.scaleY ? `calc(100% * ${props.scaleY})` : "100%"};
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: ${(props) => (props.offsetY ? props.offsetY : "0px")};
  margin-left: ${(props) => (props.offsetX ? props.offsetX : "0px")};
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  & .apng {
    width: 100%;
    height: 100%;
    filter: ${(props) =>
      props.filter ? imgColorFilter(props.filter) : "none"};
    opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  }
`;

export default React.memo((props) => {
  const [hovering, setHovering] = React.useState(false);
  return (
    <ThemeProvider theme={theme}>
      <ParticleContainer
        hoverCursor={props.hoverCursor}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        filter={hovering ? props.hoverFilter : props.filter}
      >
        {props.children}
        {props.animations.map((el) => (
          <AnimationContainer
            offsetX={el.offsetX}
            offsetY={el.offsetY}
            scaleX={el.scaleX}
            scaleY={el.scaleY}
            opacity={el.opacity}
            filter={hovering ? el.hoverFilter : el.filter}
          >
            {
              animationIndex({ rate: el.rate, autoPlay: el.autoPlay }, true)[
                el.name
              ]
            }
          </AnimationContainer>
        ))}
      </ParticleContainer>
    </ThemeProvider>
  );
});
