import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Transition } from "../index";
import theme from "../themes";

export default React.memo((props) => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Transition trans={props.trans}>
      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          if (props.onCheck) {
            props.onCheck(!checked);
          }
        }}
        style={{
          color: props.color ? props.color : theme[props.theme].textColor,
        }}
      />
    </Transition>
  );
});
