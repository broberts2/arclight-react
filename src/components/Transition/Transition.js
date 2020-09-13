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
    bounceInDown: {
      anim: bounceInDown,
      custom: {
        opacity: 0,
      },
    },
    bounceInLeft: {
      anim: bounceInLeft,
      custom: {
        opacity: 0,
      },
    },
    bounceInRight: {
      anim: bounceInRight,
      custom: {
        opacity: 0,
      },
    },
    bounceInUp: {
      anim: bounceInUp,
      custom: {
        opacity: 0,
      },
    },
    bounceOutDown: {
      anim: bounceOutDown,
      custom: {
        opacity: 0,
      },
    },
    bounceOutLeft: {
      anim: bounceOutLeft,
      custom: {
        opacity: 0,
      },
    },
    bounceOutRight: {
      anim: bounceOutRight,
      custom: {
        opacity: 0,
      },
    },
    bounceOutUp: {
      anim: bounceOutUp,
      custom: {
        opacity: 0,
      },
    },
    fadeInDown: {
      anim: fadeInDown,
      custom: {
        opacity: 0,
      },
    },
    fadeInDownBig: {
      anim: fadeInDownBig,
      custom: {
        opacity: 0,
      },
    },
    fadeInLeftBig: {
      anim: fadeInLeftBig,
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
    fadeInRightBig: {
      anim: fadeInRightBig,
      custom: {
        opacity: 0,
      },
    },
    fadeInUp: {
      anim: fadeInUp,
      custom: {
        opacity: 0,
      },
    },
    fadeInUpBig: {
      anim: fadeInUpBig,
      custom: {
        opacity: 0,
      },
    },
    fadeOut: {
      anim: fadeOut,
      custom: {
        opacity: 0,
      },
    },
    fadeOutDown: {
      anim: fadeOutDown,
      custom: {
        opacity: 0,
      },
    },
    fadeOutDownBig: {
      anim: fadeOutDownBig,
      custom: {
        opacity: 0,
      },
    },
    fadeOutLeft: {
      anim: fadeOutLeft,
      custom: {
        opacity: 0,
      },
    },
    fadeOutLeftBig: {
      anim: fadeOutLeftBig,
      custom: {
        opacity: 0,
      },
    },
    fadeOutRight: {
      anim: fadeOutRight,
      custom: {
        opacity: 0,
      },
    },
    fadeOutRightBig: {
      anim: fadeOutRightBig,
      custom: {
        opacity: 0,
      },
    },
    fadeOutUp: {
      anim: fadeOutUp,
      custom: {
        opacity: 0,
      },
    },
    fadeOutUpBig: {
      anim: fadeOutUpBig,
      custom: {
        opacity: 0,
      },
    },
    flash: {
      anim: flash,
      custom: {
        opacity: 0,
      },
    },
    flip: {
      anim: flip,
      custom: {
        opacity: 0,
      },
    },
    flipInX: {
      anim: flipInX,
      custom: {
        opacity: 0,
      },
    },
    flipInY: {
      anim: flipInY,
      custom: {
        opacity: 0,
      },
    },
    flipOutX: {
      anim: flipOutX,
      custom: {
        opacity: 0,
      },
    },
    flipOutY: {
      anim: flipOutY,
      custom: {
        opacity: 0,
      },
    },
    headShake: {
      anim: headShake,
      custom: {
        opacity: 0,
      },
    },
    hinge: {
      anim: hinge,
      custom: {
        opacity: 0,
      },
    },
    jello: {
      anim: jello,
      custom: {
        opacity: 0,
      },
    },
    lightSpeedIn: {
      anim: lightSpeedIn,
      custom: {
        opacity: 0,
      },
    },
    lightSpeedOut: {
      anim: lightSpeedOut,
      custom: {
        opacity: 0,
      },
    },
    pulse: {
      anim: pulse,
      custom: {
        opacity: 0,
      },
    },
    rollIn: {
      anim: rollIn,
      custom: {
        opacity: 0,
      },
    },
    rollOut: {
      anim: rollOut,
      custom: {
        opacity: 0,
      },
    },
    rotateIn: {
      anim: rotateIn,
      custom: {
        opacity: 0,
      },
    },
    rotateInDownLeft: {
      anim: rotateInDownLeft,
      custom: {
        opacity: 0,
      },
    },
    rotateInDownRight: {
      anim: rotateInDownRight,
      custom: {
        opacity: 0,
      },
    },
    rotateInUpLeft: {
      anim: rotateInUpLeft,
      custom: {
        opacity: 0,
      },
    },
    rotateInUpRight: {
      anim: rotateInUpRight,
      custom: {
        opacity: 0,
      },
    },
    rotateOut: {
      anim: rotateOut,
      custom: {
        opacity: 0,
      },
    },
    rotateOutDownLeft: {
      anim: rotateOutDownLeft,
      custom: {
        opacity: 0,
      },
    },
    rotateOutDownRight: {
      anim: rotateOutDownRight,
      custom: {
        opacity: 0,
      },
    },
    rotateOutUpLeft: {
      anim: rotateOutUpLeft,
      custom: {
        opacity: 0,
      },
    },
    rotateOutUpRight: {
      anim: rotateOutUpRight,
      custom: {
        opacity: 0,
      },
    },
    rubberBand: {
      anim: rubberBand,
      custom: {
        opacity: 0,
      },
    },
    slideInDown: {
      anim: slideInDown,
      custom: {
        opacity: 0,
      },
    },
    slideInRight: {
      anim: slideInRight,
      custom: {
        opacity: 0,
      },
    },
    slideInUp: {
      anim: slideInUp,
      custom: {
        opacity: 0,
      },
    },
    slideOutDown: {
      anim: slideOutDown,
      custom: {
        opacity: 0,
      },
    },
    slideOutLeft: {
      anim: slideOutLeft,
      custom: {
        opacity: 0,
      },
    },
    slideOutRight: {
      anim: slideOutRight,
      custom: {
        opacity: 0,
      },
    },
    slideOutUp: {
      anim: slideOutUp,
      custom: {
        opacity: 0,
      },
    },
    tada: {
      anim: tada,
      custom: {
        opacity: 0,
      },
    },
    wobble: {
      anim: wobble,
      custom: {
        opacity: 0,
      },
    },
    zoomInDown: {
      anim: zoomInDown,
      custom: {
        opacity: 0,
      },
    },
    zoomInLeft: {
      anim: zoomInLeft,
      custom: {
        opacity: 0,
      },
    },
    zoomInRight: {
      anim: zoomInRight,
      custom: {
        opacity: 0,
      },
    },
    zoomInUp: {
      anim: zoomInUp,
      custom: {
        opacity: 0,
      },
    },
    zoomOutDown: {
      anim: zoomOutDown,
      custom: {
        opacity: 0,
      },
    },
    zoomOutLeft: {
      anim: zoomOutLeft,
      custom: {
        opacity: 0,
      },
    },
    zoomOutRight: {
      anim: zoomOutRight,
      custom: {
        opacity: 0,
      },
    },
    zoomOutUp: {
      anim: zoomOutUp,
      custom: {
        opacity: 0,
      },
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
