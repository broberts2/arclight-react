import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Transition } from "../index";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import theme from "../themes";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px",
  },
}));

const ButtonWrapper = styled.div`
  .aws-btn {
    --button-raise-level: 2px;
    --transform-speed: 0.15s;
    --button-hover-pressure: 1;
    --button-hover-darken-opacity: 0.1;
    --button-primary-border: transparent;

    --button-primary-color-light: ${(props) =>
      theme[props.props.theme]
        ? theme[props.props.theme].textColor
        : "#079178"};
    --button-primary-color: ${(props) =>
      theme[props.props.theme]
        ? theme[props.props.theme].backgroundColor
        : "#079178"};
    --button-primary-color-hover: ${(props) =>
      theme[props.props.theme]
        ? theme[props.props.theme].primaryHoverColor
        : "#079178"};
    --button-primary-color-active: ${(props) =>
      theme[props.props.theme]
        ? theme[props.props.theme].primaryActiveColor
        : "#079178"};
    --button-secondary-color: transparent;
  }
`;

const ClickWrapper = styled.div``;

export default React.memo((props) => {
  const classes = useStyles();
  const textOffset = 6;
  const Children =
    typeof props.children === "object" && props.children.length > 0
      ? Object.values(props.children).map((el, i) =>
          i > 0 ? <div style={{ marginLeft: `${textOffset}px` }}>{el}</div> : el
        )
      : props.children;
  return (
    <Transition trans={props.trans}>
      
        <ButtonWrapper props={props}>
          <ClickWrapper onClick={() => props.onClick()}>
            {props.pop ? (
              <AwesomeButton type="primary">{Children}</AwesomeButton>
            ) : (
              <Button
                className={classes.root}
                style={{
                  color: theme[props.theme].textColor,
                  backgroundColor: theme[props.theme].backgroundColor,
                }}
                variant="contained"
              >
                {Children}
              </Button>
            )}
          </ClickWrapper>
        </ButtonWrapper>
      
    </Transition>
  );
});
