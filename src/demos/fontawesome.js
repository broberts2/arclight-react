import React, { useState } from "react";
import { FontAwesomeIcon, Grid, Button } from "../components/index";
import theme from "../components/themes";

const builder = (icon, THEME) => (
  <div style={{ margin: "3px" }}>
    <Button theme={theme[THEME].complement} pop onClick={() => alert(icon)}>
      <FontAwesomeIcon theme={THEME} icon={icon} />
    </Button>
  </div>
);

export default (THEME) => ({
  Component: (
    <Grid
      theme={theme[THEME]}
      search={true}
      itemsPerRow={15}
      height={"100%"}
      items={[
        "coffee",
        "discord",
        "twitch",
        "reddit",
        "youtube",
        "twitter",
        "facebook",
        "signOut",
        "edit",
        "checkmark",
        "cancel",
      ].map((el) => builder(el, THEME))}
    />
  ),
  Example: `
  import { FontAwesomeIcon } from "arclight-react";

  <FontAwesomeIcon
    theme={theme[props.theme].complement}
    icon={"signOut"}
  />
  `,
});
