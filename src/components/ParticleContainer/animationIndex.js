import React from "react";
import Apng from "react-apng";
import { Checkbox, Img } from "../../components/index";

const _ApngObj = (props) => (
  <Img
    rate={props.obj && props.obj.rate ? props.obj.rate : 1}
    autoPlay={props.obj && props.obj.autoPlay ? props.obj.autoPlay : false}
    className={"apng"}
    src={props.src}
  />
);

export default (obj, playing) => ({
  solid_smoke: <_ApngObj src={require("./apng/solid_smoke.png")} obj={obj} />,
});
