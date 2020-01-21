import React from "react";
import Styles from "./styles";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function CAlert(props) {
  const style = Styles[props.style]();
  const alertType = (() => {
    switch (props.type) {
      case "success":
        return <Alert severity="success">{props.data.text}</Alert>;
      case "error":
        return <Alert severity="error">{props.data.text}</Alert>;
      case "warning":
        return <Alert severity="warning">{props.data.text}</Alert>;
      case "info":
        return <Alert severity="info">{props.data.text}</Alert>;
      case "success-title":
        return (
          <Alert severity="success">
            <AlertTitle>{props.data.title}</AlertTitle>
            {props.data.text}
          </Alert>
        );
      case "error-title":
        return (
          <Alert severity="error">
            <AlertTitle>{props.data.title}</AlertTitle>
            {props.data.text}
          </Alert>
        );
      case "warning-title":
        return (
          <Alert severity="warning">
            <AlertTitle>{props.data.title}</AlertTitle>
            {props.data.text}
          </Alert>
        );
      case "info-title":
        return (
          <Alert severity="info">
            <AlertTitle>{props.data.title}</AlertTitle>
            {props.data.text}
          </Alert>
        );
    }
  })();
  return (
    <div className={style.root}>
      <div
        onClick={() => (props.cb ? props.cb() : null)}
        style={props.cb ? { cursor: "pointer" } : {}}
      >
        {alertType}
      </div>
    </div>
  );
}
