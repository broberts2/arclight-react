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
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeInDown,
  fadeInDownBig,
  fadeInLeftBig,
  fadeInRightBig,
  fadeInUp,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutUp,
  fadeOutUpBig,
  flash,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  headShake,
  hinge,
  jello,
  lightSpeedIn,
  lightSpeedOut,
  pulse,
  rollIn,
  rollOut,
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  rubberBand,
  slideInDown,
  slideInRight,
  slideInUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
  tada,
  wobble,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
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
    },
    slideInLeft: {
      anim: slideInLeft,
    },
    fadeOut: {
      anim: fadeOut,
    },
    shake: {
      anim: shake,
      custom: {},
    },
    swing: {
      anim: swing,
      custom: {},
    },
    fadeInUpBig: {
      anim: fadeInUpBig,
      custom: {},
    },
    fadeInLeft: {
      anim: fadeInLeft,
      custom: {},
    },
    fadeInRight: {
      anim: fadeInRight,
      custom: {},
    },
    zoomIn: {
      anim: zoomIn,
      custom: {},
    },
    zoomOut: {
      anim: zoomOut,
      custom: {},
    },
    bounceInDown: {
      anim: bounceInDown,
      custom: {},
    },
    bounceInLeft: {
      anim: bounceInLeft,
      custom: {},
    },
    bounceInRight: {
      anim: bounceInRight,
      custom: {},
    },
    bounceInUp: {
      anim: bounceInUp,
      custom: {},
    },
    bounceOutDown: {
      anim: bounceOutDown,
      custom: {},
    },
    bounceOutLeft: {
      anim: bounceOutLeft,
      custom: {},
    },
    bounceOutRight: {
      anim: bounceOutRight,
      custom: {},
    },
    bounceOutUp: {
      anim: bounceOutUp,
      custom: {},
    },
    fadeInDown: {
      anim: fadeInDown,
      custom: {},
    },
    fadeInDownBig: {
      anim: fadeInDownBig,
      custom: {},
    },
    fadeInLeftBig: {
      anim: fadeInLeftBig,
      custom: {},
    },
    fadeInRight: {
      anim: fadeInRight,
      custom: {},
    },
    fadeInRightBig: {
      anim: fadeInRightBig,
      custom: {},
    },
    fadeInUp: {
      anim: fadeInUp,
      custom: {},
    },
    fadeInUpBig: {
      anim: fadeInUpBig,
      custom: {},
    },
    fadeOut: {
      anim: fadeOut,
      custom: {},
    },
    fadeOutDown: {
      anim: fadeOutDown,
      custom: {},
    },
    fadeOutDownBig: {
      anim: fadeOutDownBig,
      custom: {},
    },
    fadeOutLeft: {
      anim: fadeOutLeft,
      custom: {},
    },
    fadeOutLeftBig: {
      anim: fadeOutLeftBig,
      custom: {},
    },
    fadeOutRight: {
      anim: fadeOutRight,
      custom: {},
    },
    fadeOutRightBig: {
      anim: fadeOutRightBig,
      custom: {},
    },
    fadeOutUp: {
      anim: fadeOutUp,
      custom: {},
    },
    fadeOutUpBig: {
      anim: fadeOutUpBig,
      custom: {},
    },
    flash: {
      anim: flash,
      custom: {},
    },
    flip: {
      anim: flip,
      custom: {},
    },
    flipInX: {
      anim: flipInX,
      custom: {},
    },
    flipInY: {
      anim: flipInY,
      custom: {},
    },
    flipOutX: {
      anim: flipOutX,
      custom: {},
    },
    flipOutY: {
      anim: flipOutY,
      custom: {},
    },
    headShake: {
      anim: headShake,
      custom: {},
    },
    hinge: {
      anim: hinge,
      custom: {},
    },
    jello: {
      anim: jello,
      custom: {},
    },
    lightSpeedIn: {
      anim: lightSpeedIn,
      custom: {},
    },
    lightSpeedOut: {
      anim: lightSpeedOut,
      custom: {},
    },
    pulse: {
      anim: pulse,
      custom: {},
    },
    rollIn: {
      anim: rollIn,
      custom: {},
    },
    rollOut: {
      anim: rollOut,
      custom: {},
    },
    rotateIn: {
      anim: rotateIn,
      custom: {},
    },
    rotateInDownLeft: {
      anim: rotateInDownLeft,
      custom: {},
    },
    rotateInDownRight: {
      anim: rotateInDownRight,
      custom: {},
    },
    rotateInUpLeft: {
      anim: rotateInUpLeft,
      custom: {},
    },
    rotateInUpRight: {
      anim: rotateInUpRight,
      custom: {},
    },
    rotateOut: {
      anim: rotateOut,
      custom: {},
    },
    rotateOutDownLeft: {
      anim: rotateOutDownLeft,
      custom: {},
    },
    rotateOutDownRight: {
      anim: rotateOutDownRight,
      custom: {},
    },
    rotateOutUpLeft: {
      anim: rotateOutUpLeft,
      custom: {},
    },
    rotateOutUpRight: {
      anim: rotateOutUpRight,
      custom: {},
    },
    rubberBand: {
      anim: rubberBand,
      custom: {},
    },
    slideInDown: {
      anim: slideInDown,
      custom: {},
    },
    slideInRight: {
      anim: slideInRight,
      custom: {},
    },
    slideInUp: {
      anim: slideInUp,
      custom: {},
    },
    slideOutDown: {
      anim: slideOutDown,
      custom: {},
    },
    slideOutLeft: {
      anim: slideOutLeft,
      custom: {},
    },
    slideOutRight: {
      anim: slideOutRight,
      custom: {},
    },
    slideOutUp: {
      anim: slideOutUp,
      custom: {},
    },
    tada: {
      anim: tada,
      custom: {},
    },
    wobble: {
      anim: wobble,
      custom: {},
    },
    zoomInDown: {
      anim: zoomInDown,
      custom: {},
    },
    zoomInLeft: {
      anim: zoomInLeft,
      custom: {},
    },
    zoomInRight: {
      anim: zoomInRight,
      custom: {},
    },
    zoomInUp: {
      anim: zoomInUp,
      custom: {},
    },
    zoomOutDown: {
      anim: zoomOutDown,
      custom: {},
    },
    zoomOutLeft: {
      anim: zoomOutLeft,
      custom: {},
    },
    zoomOutRight: {
      anim: zoomOutRight,
      custom: {},
    },
    zoomOutUp: {
      anim: zoomOutUp,
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
