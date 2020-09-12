import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Radium, { StyleRoot } from "radium";
import {
  bounce,
  bounceOut,
  bounceIn,
  fadeIn,
  fadeOut,
  shake,
  swing,
  slideInLeft,
  fadeInUpBig,
  fadeInLeft,
  fadeInRight,
  zoomIn,
  zoomOut,
} from "react-animations";
import theme from "../themes";

const styles = (obj) => {
  const defObject = (name, anim, obj) => ({
    animation: `${obj.count ? `${obj.count}` : "1"} ${
      obj.duration ? `${obj.duration}` : "1"
    }s`,
    animationDelay: `${obj.delay ? obj.delay : "0"}s`,
    animationName: Radium.keyframes(anim, name),
    animationFillMode: "forwards",
  });
  const animations = {
    bounce: {
      anim: bounce,
      custom: {},
    },
    bounceIn: {
      anim: bounceIn,
      custom: {},
    },
    bounceOut: {
      anim: bounceOut,
      custom: {},
    },
    fadeIn: {
      anim: fadeIn,
      custom: {
        opacity: 0,
      },
    },
    fadeOut: {
      anim: fadeOut,
      custom: {},
    },
    shake: {
      anim: shake,
      custom: {},
    },
    swing: {
      anim: swing,
      custom: {
        animationFillMode: "none",
      },
    },
    fadeInUpBig: {
      anim: fadeInUpBig,
      custom: {
        opacity: 0,
      },
    },
    fadeInLeft: {
      anim: fadeInLeft,
      custom: {
        opacity: 0,
      },
    },
    fadeInRight: {
      anim: fadeInRight,
      custom: {
        opacity: 0,
      },
    },
    zoomIn: {
      anim: zoomIn,
      custom: {},
    },
    zoomOut: {
      anim: zoomOut,
      custom: {},
    },
  };
  for (let key in animations) {
    animations[key] = Object.assign(
      animations[key].custom ? animations[key].custom : {},
      defObject(key, animations[key].anim, obj)
    );
  }
  return animations;
};

export default (props) => (
  <ThemeProvider theme={theme}>
    <StyleRoot>
      <div
        style={props.trans ? styles(props.trans)[props.trans.animation] : {}}
      >
        {props.children}
      </div>
    </StyleRoot>
  </ThemeProvider>
);

//
// bounceInDown
//
// bounceInLeft
//
// bounceInRight
//
// bounceInUp
//
// bounceOutDown
//
// bounceOutLeft
//
// bounceOutRight
//
// bounceOutUp
//
// fadeInDown
//
// fadeInDownBig
//
// fadeInLeftBig
//
// fadeInRight
//
// fadeInRightBig
//
// fadeInUp
//
// fadeInUpBig
//
// fadeOut
//
// fadeOutDown
//
// fadeOutDownBig
//
// fadeOutLeft
//
// fadeOutLeftBig
//
// fadeOutRight
//
// fadeOutRightBig
//
// fadeOutUp
//
// fadeOutUpBig
//
// flash
//
// flip
//
// flipInX
//
// flipInY
//
// flipOutX
//
// flipOutY
//
// headShake
//
// hinge
//
// jello
//
// lightSpeedIn
//
// lightSpeedOut
//
// pulse
//
// rollIn
//
// rollOut
//
// rotateIn
//
// rotateInDownLeft
//
// rotateInDownRight
//
// rotateInUpLeft
//
// rotateInUpRight
//
// rotateOut
//
// rotateOutDownLeft
//
// rotateOutDownRight
//
// rotateOutUpLeft
//
// rotateOutUpRight
//
// rubberBand
//
// slideInDown
//
// slideInRight
//
// slideInUp
//
// slideOutDown
//
// slideOutLeft
//
// slideOutRight
//
// slideOutUp
//
// tada
//
// wobble
//
// zoomInDown
//
// zoomInLeft
//
// zoomInRight
//
// zoomInUp
//
// zoomOutDown
//
// zoomOutLeft
//
// zoomOutRight
//
// zoomOutUp
