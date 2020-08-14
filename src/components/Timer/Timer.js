import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import theme from "../themes";

const Timer = styled.div``;

export default React.memo((props) => (
  <ThemeProvider theme={theme}>
    <Timer>
      <CountdownCircleTimer
        isPlaying
        duration={10}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </Timer>
  </ThemeProvider>
));
