import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  item: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& img": {
      objectFit: "fill",
      width: "100%",
      height: "100%"
    }
  },
  grid: {
    padding: "20px"
  }
}));
