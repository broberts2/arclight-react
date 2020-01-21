import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    transform: "translateZ(0px)",
    width: "100%",
    height: "100%",
    minHeight: "85px"
  },
  speedDial: {
    color: "slategray",
    icon: {
      color: "green",
      backgroundColor: "green"
    },
    position: "absolute",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2)
    }
  }
}));
