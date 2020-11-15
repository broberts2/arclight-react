import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Transition, VideoHover } from "../index";
import theme from "../themes";

const Template = styled.div``;

const useStyles = (customize) =>
  makeStyles(() => {
    return {
      root: {
        "& > *": {
          cursor: "pointer",
          borderRadius: "4px",
          backgroundColor: theme[customize.theme].backgroundColor,
          margin: "6px",
          width: customize.width ? customize.width : "100%",
          height: customize.height ? customize.height : "100%",
          overflow: "hidden",
        },
      },
    };
  });

const Panel = styled.div``;

const Content = styled.div`
  position: relative;
  width: calc(
    100% - ${(props) => (props.padding ? `${props.padding} * 2` : "0px")}
  );
  height: calc(
    100% - ${(props) => (props.padding ? `${props.padding} * 2` : "0px")}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.padding ? props.padding : "0px")};
`;

const Children = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
`;

const Background = styled.div`
  position: absolute;
  width: calc(
    100% - ${(props) => (props.padding ? `${props.padding} * 2` : "0px")}
  );
  height: calc(
    100% - ${(props) => (props.padding ? `${props.padding} * 2` : "0px")}
  );
  top: ${(props) => (props.padding ? props.padding : "0px")};
  left: ${(props) => (props.padding ? props.padding : "0px")};
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
`;

export default React.memo((props) => {
  const [hovering, setHovering] = React.useState(false);
  const classes = useStyles(
    Object.assign(
      { width: props.width, height: props.height },
      { theme: props.theme }
    )
  )();
  return (
    <Transition trans={props.trans}>
      <Panel className={classes.root}>
        <Paper
          elevation={6}
          onClick={() => (props.onClick ? props.onClick() : null)}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <Content padding={props.padding}>
            {props.background && props.background.type === "video" ? (
              <Background padding={props.padding}>
                <div style={{ width: "100%", height: "100%" }}>
                  <VideoHover
                    fadeOnPause={props.background.fadeOnPause}
                    playing={hovering}
                    src={props.background.src}
                  />
                </div>
              </Background>
            ) : null}
            {props.background && props.background.type === "img" ? (
              <Background padding={props.padding}>
                <div style={{ width: "100%", height: "100%" }}>
                  <img
                    src={props.background.src}
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </Background>
            ) : null}
            <Children>{props.children}</Children>
          </Content>
        </Paper>
      </Panel>
    </Transition>
  );
});
