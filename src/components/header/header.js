import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Styles from "./styles";

export default function Header(props) {
  const style = Styles[props.style]();
  const header = () => {
    switch (props.style) {
      case "a":
        return (
          <div className={style.root}>
            <AppBar className={style.appBar} position="static">
              <Toolbar>
                <img
                  alt={""}
                  src={props.data.logo.src}
                  className={style.logo}
                  style={{ height: props.data.logo.height }}
                />
                <h2 className={style.title}>{props.data.title}</h2>
                {props.data.links.map(el => (
                  <div onClick={() => el.cb()} color="inherit">
                    {el.cnt}
                  </div>
                ))}
              </Toolbar>
            </AppBar>
          </div>
        );
      case "b":
        return (
          <div className={style.root}>
            <AppBar className={style.appBar} position="static">
              <Toolbar>
                <img
                  alt={""}
                  src={props.data.logo.src}
                  className={style.logo}
                  style={{ height: props.data.logo.height }}
                />
                <h2 className={style.title}>{props.data.title}</h2>
                {props.data.links.map(el => (
                  <div onClick={() => el.cb()} color="inherit">
                    {el.cnt}
                  </div>
                ))}
              </Toolbar>
            </AppBar>
          </div>
        );
      case "c":
        return (
          <div className={style.root}>
            <AppBar className={style.appBar} position="static">
              <Toolbar>
                <h1 className={style.title}>{props.data.title}</h1>
                {props.data.links.map(el => (
                  <div onClick={() => el.cb()} color="inherit">
                    {el.cnt}
                  </div>
                ))}
              </Toolbar>
            </AppBar>
          </div>
        );
    }
  };
  return header();
}
