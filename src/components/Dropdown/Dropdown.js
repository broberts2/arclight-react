import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import styled, { ThemeProvider } from "styled-components";
import { Transition } from "../index";
import theme from "../themes";

const Dropdown = styled.div`
  width: 100%;
`;

const useDropDownStyles = makeStyles(() => ({
  root: {},
}));

export default React.memo((props) => {
  return (
    <Transition trans={props.trans}>
      <ThemeProvider theme={theme}>
        <Dropdown>
          <FormControl style={{ width: "100%" }} classes={useDropDownStyles}>
            <InputLabel>{props.id}</InputLabel>
            <Select
              onChange={props.onChange}
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                paddingLeft: "0px",
                overflow: "hidden",
              }}
            >
              {props.items.map((el, i) => (
                <MenuItem
                  value={el.value}
                  style={{
                    color: theme[props.theme].textColor,
                    backgroundColor: theme[props.theme].backgroundColor,
                  }}
                >
                  <div style={{ marginLeft: "30px" }}>{el.component}</div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Dropdown>
      </ThemeProvider>
    </Transition>
  );
});
