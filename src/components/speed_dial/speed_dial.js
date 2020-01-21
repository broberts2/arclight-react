import React from "react";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import Styles from "./styles";

export default function SpeedDials(props) {
  const [direction, setDirection] = React.useState(
    props.direction ? props.direction : "up"
  );
  const [open, setOpen] = React.useState(false);
  const style = Styles[props.style]();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={style.root}>
      <SpeedDial
        ariaLabel="speeddial"
        className={style.speedDial}
        hidden={props.hidden}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={direction}
        FabProps={{
          color: "inherit"
        }}
      >
        {props.data.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
