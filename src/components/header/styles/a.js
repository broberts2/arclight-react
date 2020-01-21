import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    color: "rgb(42, 42, 42)",
    backgroundColor: "rgb(225, 225, 225)"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    cursor: "pointer"
  },
  logo: {
    cursor: "pointer",
    margin: 15,
    marginRight: 35
  }
}));
