import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default React.memo((props) => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        if (props.onCheck) {
          props.onCheck(!checked);
        }
      }}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
});
