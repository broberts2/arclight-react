import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import styled from "styled-components";
import { Transition } from "../index";
import theme from "../themes";

const Dropdown = styled.div`
  width: 100%;
`;

const useDropDownStyles = makeStyles(() => ({
  root: {
    border: "red",
  },
}));

const Label = styled.div`
  font-size: 18px;
  font-family: Kufam;
  color: ${(props) => theme[props.theme].textColor};
`;

export default React.memo((props) => {
  const [value, setValue] = React.useState(
    props.defaultValue
      ? props.defaultValue
      : props.allowNone
      ? props.allowNone
      : ""
  );
  return (
    <Transition trans={props.trans}>
      <Dropdown>
        <FormControl style={{ width: "100%" }} classes={useDropDownStyles}>
          {props.label ? (
            <InputLabel>
              <Label theme={props.theme}>{props.label}</Label>
            </InputLabel>
          ) : null}
          <Select
            dropDownMenuProps={{
              menuStyle: {
                border: "1px solid black",
                borderRadius: "5%",
                backgroundColor: "blue",
              },
            }}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              return props.onChange(e);
            }}
            style={{
              backgroundColor: theme[props.theme].backgroundColor,
              borderRadius: "4px",
              paddingLeft: "0px",
              overflow: "hidden",
            }}
          >
            {props.allowNone ? (
              <MenuItem
                value={props.allowNone}
                style={{
                  fontFamily: "Kufam",
                  color: theme[props.theme].textColor,
                  backgroundColor: theme[props.theme].backgroundColor,
                }}
              >
                <div
                  style={{
                    fontFamily: "Kufam",
                    marginLeft: "30px",
                    color: theme[props.theme].textColor,
                  }}
                >
                  <div>
                    <i>{props.allowNone}</i>
                  </div>
                </div>
              </MenuItem>
            ) : null}
            {props.items.map((el, i) => (
              <MenuItem
                value={el.value}
                style={{
                  fontFamily: "Kufam",
                  color: theme[props.theme].textColor,
                  backgroundColor: theme[props.theme].backgroundColor,
                }}
              >
                <div
                  style={{
                    fontFamily: "Kufam",
                    marginLeft: "30px",
                    color: theme[props.theme].textColor,
                  }}
                >
                  {el.component}
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Dropdown>
    </Transition>
  );
});
