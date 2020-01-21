import React from "react";
import Styles from "./styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function HCard(props) {
  const style = Styles[props.style]();

  return (
    <div className={style.root}>
      <Grid container spacing={0} className={style.grid}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {props.data.content.map(el => (
              <Grid key={1} xs={12} sm={12 / props.data.content.length} item>
                <div className={style.item}>{el}</div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
