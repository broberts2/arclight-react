import React from "react";
import styled from "styled-components";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Transition } from "../index";
import theme from "../themes";

const Timer = styled.div``;

const size = {
  normal: 0.4,
  critical: 0.7,
};

export default React.memo((props) => (
  <Transition trans={props.trans}>
    <Timer>
      <CountdownCircleTimer
        initialRemainingTime={props.initialRemainingTime}
        strokeLinecap={"round"}
        size={props.size}
        isPlaying={props.isPlaying ? props.isPlaying : true}
        strokeWidth={props.strokeWidth}
        onComplete={() => (props.onComplete ? props.onComplete() : null)}
        duration={props.seconds}
        colors={theme[props.theme].timerSeries}
        trailColor={"transparent"}
        key={props.resetKey}
      >
        {({ remainingTime, elapsedTime }) => (
          <Transition
            trans={
              remainingTime <= props.crit
                ? {
                    animation: "bounceIn",
                    count: props.crit + 1,
                    duration: 1,
                  }
                : null
            }
          >
            <div
              style={{
                fontSize:
                  remainingTime <= props.crit
                    ? size.critical * props.size
                    : size.normal * props.size,
              }}
            >
              <Transition
                trans={
                  remainingTime <= 0
                    ? { animation: "bounceOut", delay: 0.5 }
                    : null
                }
              >
                {remainingTime >= 0 ? remainingTime : null}
              </Transition>
            </div>
          </Transition>
        )}
      </CountdownCircleTimer>
    </Timer>
  </Transition>
));
