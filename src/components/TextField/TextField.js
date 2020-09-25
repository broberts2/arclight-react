import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import { Transition } from "../index";
import theme from "../themes";

export default class _ extends React.Component {
  state = {
    value: "",
    variant: this.props.variant ? this.props.variant : "standard",
    Component: this.style(),
  };

  style() {
    return withStyles({
      root: {
        "& label.Mui-focused": {
          color: `purple`,
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: theme[this.props.theme].textColor,
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: theme[this.props.theme].textColor,
          },
          "&:hover fieldset": {
            borderColor: `purple`,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme[this.props.theme].textColor,
          },
        },
      },
    })(TextField);
  }

  render() {
    const classes = this.props;
    return (
      <Transition trans={this.props.trans}>
        <div style={{ width: "100%", fontFamily: "inherit" }}>
          <this.state.Component
            classes={classes.root}
            variant={this.state.variant} // filled, outlined, standard
            error={false}
            select={false}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                if (this.props.onEnter) this.props.onEnter(this.state.value);
              }
            }}
            value={this.props.value ? this.props.value : null}
            readonly={this.props.readonly}
            label={this.props.placeholder}
            onChange={(e) => {
              if (this.props.onChange) {
                this.props.onChange(e);
              }
              this.setState({ value: e.target.value });
            }}
            style={{ width: "100%" }}
            inputProps={{
              style: {
                fontSize: this.props.textSize ? this.props.textSize : 18,
                fontFamily: "Kufam",
                color: theme[this.props.theme]
                  ? theme[this.props.theme].textColor
                  : "pink",
              },
            }}
            InputLabelProps={{
              style: {
                fontFamily: "Kufam",
                color: theme[this.props.theme]
                  ? theme[this.props.theme].textColor
                  : "green",
              },
            }}
            InputProps={{
              style: { fontFamily: "Kufam" },
            }}
            SelectProps={{
              style: { fontFamily: "Kufam" },
            }}
          />
        </div>
      </Transition>
    );
  }
}
