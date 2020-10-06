import React, { useState } from "react";
import { TextField, Button, Utils } from "../components/index";
import theme from "../components/themes";

class _ extends React.Component {
  state = {
    cookieName: "cookie_name_string",
    cookieValue: "cookie_value_string",
  };

  render() {
    return (
      <div style={{ margin: "15px", marginLeft: "0px" }}>
        <div style={{ margin: "15px", marginLeft: "0px", width: "250px" }}>
          <TextField
            placeholder={"Cookie Name"}
            theme={this.props.theme}
            onEnter={(e) => console.log(e)}
            readonly={false}
            value={this.state.cookieName}
            onChange={(e) => this.setState({ cookieName: e.target.value })}
          />
        </div>
        <div style={{ margin: "15px", marginLeft: "0px", width: "250px" }}>
          <TextField
            placeholder={"Cookie Value"}
            theme={this.props.theme}
            onEnter={(e) => console.log(e)}
            readonly={false}
            value={this.state.cookieValue}
            onChange={(e) => this.setState({ cookieValue: e.target.value })}
          />
        </div>
        <div style={{ margin: "15px", marginLeft: "0px" }}>
          <Button
            textColor={null}
            theme={theme[this.props.theme].complement}
            pop
            onClick={() => {
              Utils.Cookies.bake_cookie(
                this.state.cookieName,
                this.state.cookieValue
              );
              alert(
                `Cookie "${this.state.cookieName}" with the value "${this.state.cookieValue}" saved to your browser!`
              );
            }}
          >
            {`Utils.Cookies.create_cookie("${this.state.cookieName}", "${this.state.cookieValue}")`}
          </Button>
        </div>
        <div style={{ margin: "15px", marginLeft: "0px" }}>
          <Button
            textColor={null}
            theme={theme[this.props.theme].complement}
            pop
            onClick={() =>
              alert(
                `Reading "${this.state.cookieName}". Its value is ${
                  Utils.Cookies.read_cookie(this.state.cookieName)
                    ? `"${Utils.Cookies.read_cookie(this.state.cookieName)}"`
                    : "null"
                }.`
              )
            }
          >
            {`Utils.Cookies.read_cookie("${this.state.cookieName}")`}
          </Button>
        </div>
        <div style={{ margin: "15px", marginLeft: "0px" }}>
          <Button
            textColor={null}
            theme={theme[this.props.theme].complement}
            pop
            onClick={() => {
              Utils.Cookies.delete_cookie(this.state.cookieName);
              alert(
                `Deleting the cookie with the name "${this.state.cookieName}" from your browser! Poof, it's gone!`
              );
            }}
          >
            {`Utils.Cookies.delete_cookie("${this.state.cookieName}")`}
          </Button>
        </div>
        <div style={{ margin: "15px", marginLeft: "0px" }}>
          <a href={"https://www.npmjs.com/package/sfcookies"} target={"_blank"}>
            Courtesy of sf-cookies (15dkatz)
          </a>
        </div>
      </div>
    );
  }
}

export default (THEME) => ({
  Component: <_ theme={THEME} />,
  Example: `
  import { Utils } from "arclight-react";

  Utils.Cookies.bake_cookie("name", "string")
  Utils.Cookies.read_cookie("name")
  Utils.Cookies.delete_cookie("name")
  `,
});
