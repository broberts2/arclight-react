import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Styles from "./styles";

export default function Drawer(props) {
  const style = Styles[props.style]();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const loop = () =>
    props.items.map(el =>
      el === "divider" ? (
        <Divider />
      ) : (
        <ListItem button key={el.text}>
          <ListItemIcon>{el.icon}</ListItemIcon>
          <ListItemText primary={el.text} />
        </ListItem>
      )
    );

  const sideList = side => (
    <div
      className={style.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>{loop()}</List>
    </div>
  );

  const fullList = side => (
    <div
      className={style.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>{loop()}</List>
    </div>
  );

  return (
    <div>
      <div onClick={toggleDrawer(props.direction, true)}>{props.button}</div>
      <SwipeableDrawer
        ModalProps={{
          BackdropProps: {
            classes: {
              root: {
                backgroundColor: "blue"
              }
            }
          }
        }}
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
        className={style.root}
      >
        {sideList("left")}
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
        className={style.root}
      >
        {fullList("top")}
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
        className={style.root}
      >
        {fullList("bottom")}
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
        className={style.root}
      >
        {sideList("right")}
      </SwipeableDrawer>
    </div>
  );
}
