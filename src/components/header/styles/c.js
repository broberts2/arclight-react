import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    backgroundColor: "transparent",
    position: "absolute",
    top: "0",
    zIndex: 1,
    width: "100%"
  },
  appBar: {
    color: "rgb(225, 225, 225)",
    backgroundColor: "transparent",
    boxShadow: "0px 0px #ffffff"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    cursor: "pointer"
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    margin: "50px"
  }
}));
