import React from "react";
import Styles from "./styles";

export default function Slider(props) {
  return (
    <div className={"wrapper"}>
      <input
        onChange={e => props.onChange(e, props.max)}
        className={"c-slider"}
        id={props.id}
        type="range"
        min={0}
        max={props.max ? props.max : 100}
        step={props.step ? props.step : "1"}
        value={props.value}
      />
    </div>
  );
}
