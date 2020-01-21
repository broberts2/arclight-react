import React from "react";
import Styles from "./styles";

export default function Border(props) {
  const style = Styles[props.style]();

  return (
    <div>
      <svg viewBox="0 0 250 500" width="250px" height="500px">
        <path
          d="M25,2 L2,2 L2,25"
          fill="none"
          stroke="black"
          stroke-width="3"
        />
        <path
          d="M2,75 L2,98 L25,98"
          fill="none"
          stroke="black"
          stroke-width="3"
        />
        <path
          d="M75,98 L98,98 L98,75"
          fill="none"
          stroke="black"
          stroke-width="3"
        />
        <path
          d="M98,25 L98,2 L75,2"
          fill="none"
          stroke="black"
          stroke-width="3"
        />
      </svg>
    </div>
  );
}
