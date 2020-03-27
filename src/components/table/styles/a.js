import { lighten, makeStyles } from "@material-ui/core/styles";

export default {
  toolbar: makeStyles(theme => ({
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
      cursor: "pointer",
      width: "100%",
      paddingLeft: "50px",
      color: "Black"
    },
    logo: {
      cursor: "pointer",
      margin: 15,
      marginRight: 35
    }
  })),
  enhancedTable: makeStyles(theme => ({
    root: {},
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
      backgroundColor: "white"
    },
    table: {
      minWidth: 350
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    }
  })),
  enhancedTableWrapper: makeStyles(theme => ({
    root: {
      padding: "5px"
    }
  })),
  tableCell: makeStyles(theme => ({
    root: {
      color: "black"
    }
  }))
};
