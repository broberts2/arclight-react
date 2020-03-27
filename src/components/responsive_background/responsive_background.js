import React from "react";
import Styles from "./styles";

//const el = document.getElementsByClassName("responsive-background");

// el.addEventListener("mousemove", (e) => {
//   el.style.backgroundPositionX = -e.offsetX + "px";
//   el.style.backgroundPositionY = -e.offsetY + "px";
// });

export default function ResponsiveBackground(props) {
  const style = Styles[props.style];
  React.useEffect(() => {
    const el = document.getElementById(props.id);
    el.addEventListener("mousemove", e => {
      // console.log(e);
      // el.style.left = -e.offsetY + "px";
      // el.style.top = -e.offsetY + "px";
    });
  }, []);
  return (
    <div className={"responsive-background"} id={props.id}>
      <div className={"background"}>{props.background}</div>
    </div>
  );
}
