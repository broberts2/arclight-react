import React from "react";
import {
  merge,
  bounce,
  flipInY,
  zoomInRight,
  pulse,
  fadeOutDown,
  fadeOut,
  fadeIn,
  bounceIn,
  slideInLeft,
  slideOutLeft,
  slideInRight,
  slideOutRight,
  slideInDown,
  slideOutDown,
  slideInUp
} from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./animation.css";

const styles = {
  none: {},
  bounce: duration => ({
    animation: `1 ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(bounce, "bounce")
  }),
  pulse: duration => ({
    animation: `infinite ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(pulse, "pulse")
  }),
  fadeOut: duration => ({
    animation: `infinite ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(fadeOut, "fadeOut")
  }),
  fadeIn: duration => ({
    animation: `infinite ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }),
  fadeOutDown: duration => ({
    animation: `infinite ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(fadeOutDown, "fadeOutDown")
  }),
  flipInY: duration => ({
    animation: `1 ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(flipInY, "flipInY")
  }),
  bounceIn: duration => ({
    animation: `infinite ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(bounceIn, "bounceIn")
  }),
  zoomInRight: duration => ({
    animation: `1 ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(zoomInRight, "zoomInRight")
  }),
  flipZoom: duration => ({
    animation: `1 ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(merge(zoomInRight, flipInY), "flipZoom")
  }),
  slideInLeft: duration => ({
    animation: `1 ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(slideInLeft, "slideInLeft")
  }),
  slideOutLeft: duration => ({
    animation: `1 ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(slideOutLeft, "slideOutLeft")
  }),
  slideInDown: duration => ({
    animation: `1 ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(slideInDown, "slideInDown")
  }),
  slideOutDown: duration => ({
    animation: `1 ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(slideOutDown, "slideOutDown")
  }),
  slideInRight: duration => ({
    animation: `1 ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(slideInRight, "slideInRight")
  }),
  slideOutRight: duration => ({
    animation: `1 ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(slideOutRight, "slideOutRight")
  }),
  slideInUp: duration => ({
    animation: `1 ${duration ? duration : 1}s forwards`,
    animationName: Radium.keyframes(slideInUp, "slideInUp")
  })
};

export default class Anim extends React.Component {
  render() {
    return (
      <StyleRoot>
        <div style={styles[this.props.animationName](this.props.duration)}>
          {this.props.children}
        </div>
      </StyleRoot>
    );
  }
}
