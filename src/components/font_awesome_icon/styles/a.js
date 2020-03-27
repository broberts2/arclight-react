import { makeStyles } from "@material-ui/core/styles";
import color_parser from "../../color_parser";

export default color =>
  makeStyles(theme => ({
    img: {
      width: "50px",
      height: "50px",
      filter: color_parser(color),
      transition: "all 0.25s ease-in-out",
      "-moz-transition": "all 0.25s ease-in-out",
      "-webkit-transition": "all 0.25s ease-in-out"
    }
  }));
