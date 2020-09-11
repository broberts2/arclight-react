import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { Transition } from "../index";
import theme from "../themes";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
  },
}));

const MaterialIcon = styled.div`
  width: 100%;
  font-size: ${(props) => (props.size ? `${props.size}px` : "32px")};
`;

const filter = (str, classes) => {
  switch (str) {
    case "lock":
      return <LockIcon className={classes.root} fontSize={"inherit"} />;
    case "exit":
      return <ExitToApp className={classes.root} fontSize={"inherit"} />;
    case "lockopen":
      return <LockOpenIcon className={classes.root} fontSize={"inherit"} />;
  }
};

export default React.memo((props) => {
  const classes = useStyles();
  return (
    <Transition trans={props.trans}>
      <ThemeProvider theme={theme}>
        <MaterialIcon size={props.size}>
          {filter(props.icon, classes)}
        </MaterialIcon>
      </ThemeProvider>
    </Transition>
  );
});
