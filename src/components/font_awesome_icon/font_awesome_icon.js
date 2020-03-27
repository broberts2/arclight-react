import React from "react";
import Styles from "./styles";

export default function FontAwesomeIcon(props) {
  const style = Styles[props.style](props.color)();
  return (
    <div onClick={() => (props.onClick ? props.onClick() : null)}>
      <img
        className={style.img}
        style={
          props.data.size
            ? { width: props.data.size, height: props.data.size }
            : {}
        }
        src={require(`./fontawesome-5.12.0/svgs/${
          props.data.type ? props.data.type : "solid"
        }/${props.data.img}.svg`)}
      />
    </div>
  );
}
