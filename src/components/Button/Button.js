import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import theme from "../themes";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px",
    paddingTop: "5px",
  },
}));

const ButtonWrapper = styled.div``;

const ClickWrapper = styled.div`
  display: inline-flex;
`;

export default React.memo((props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <ButtonWrapper>
        <ClickWrapper onClick={() => props.onClick()}>
          {props.pop ? (
            <AwesomeButton type="primary">{props.children}</AwesomeButton>
          ) : (
            <Button className={classes.root} variant="contained">
              {props.children}
            </Button>
          )}
        </ClickWrapper>
      </ButtonWrapper>
    </ThemeProvider>
  );
});
