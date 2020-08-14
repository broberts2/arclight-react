import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default React.memo((props) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (props.onCheck) {
      props.onCheck(checked);
    }
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
});
