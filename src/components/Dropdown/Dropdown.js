import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styled, { ThemeProvider } from "styled-components";
import theme from "../themes";

const Dropdown = styled.div``;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default React.memo((props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Dropdown>
        <FormControl className={classes.formControl}>
          <InputLabel>{props.id}</InputLabel>
          <Select onChange={props.onChange}>
            {props.items.map((el, i) => (
              <MenuItem value={el.value}>{el.component}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Dropdown>
    </ThemeProvider>
  );
});
