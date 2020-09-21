import React from "react";
import Table from "./demos/table";
import Grid from "./demos/grid";
import DoughnutChart from "./demos/doughnutchart";
import LineChart from "./demos/linechart";
import Button from "./demos/button";
import Modal from "./demos/modal";
import HoverCard from "./demos/hovercard";
import CheckBox from "./demos/checkbox";
import Particles from "./demos/particles";
import TextField from "./demos/textfield";
import HeaderStylishCenter from "./demos/header-stylish-center";
import HeaderStylishLeft from "./demos/header-stylish-left";
import Transition from "./demos/transition";
import Timer from "./demos/timer";
import MediaCycler from "./demos/mediacycler";
import _TextArea from "./demos/textarea";
import _Dropdown from "./demos/dropdown";
import { Dropdown, TextArea } from "./components/index";
import theme from "./components/themes";

const __Object__ = {
  Table,
  Grid,
  Dropdown: _Dropdown,
  LineChart,
  DoughnutChart,
  Button,
  HoverCard,
  CheckBox,
  Modal,
  Particles,
  TextField,
  MediaCycler,
  ["Header - Stylish Center"]: HeaderStylishCenter,
  ["Header - Stylish Left"]: HeaderStylishLeft,
  Transition,
  Timer,
  TextArea: _TextArea,
};

const picker = (id, THEME, anim) =>
  id === "Transition" ? __Object__[id](THEME, anim) : __Object__[id](THEME);

export default class App extends React.Component {
  state = { item: "TextArea", theme: "Dark", anim: null };
  render() {
    return (
      <div
        className="App"
        style={{
          padding: "50px",
          minHeight: "100vh",
          backgroundColor: theme[this.state.theme].backgroundColor,
        }}
      >
        <div style={{ width: "350px" }}>
          <h1 style={{ color: theme[this.state.theme].textColor }}>
            Select a Theme
          </h1>
          <Dropdown
            theme={this.state.theme}
            onChange={(e) =>
              this.setState({ theme: e.target.value, item: this.state.item })
            }
            items={Object.keys(theme)
              .map((el) => ({
                component: <div>{el}</div>,
                value: el,
              }))
              .sort((a, b) => (a.value < b.value ? -1 : 1))}
          />
          <h1 style={{ color: theme[this.state.theme].textColor }}>
            Select a Component
          </h1>
          <Dropdown
            theme={this.state.theme}
            onChange={(e) =>
              this.setState({ item: e.target.value, theme: this.state.theme })
            }
            items={Object.keys(__Object__)
              .map((el) => ({
                component: <div>{el}</div>,
                value: el,
              }))
              .sort((a, b) => (a.value < b.value ? -1 : 1))}
          />
          {this.state.item === "Transition" ? (
            <Dropdown
              theme={this.state.theme}
              onChange={(e) => this.setState({ anim: e.target.value })}
              items={[
                { component: <div>bounce</div>, value: "bounce" },
                { component: <div>bounceOut</div>, value: "bounceOut" },
                { component: <div>bounceIn</div>, value: "bounceIn" },
                { component: <div>fadeIn</div>, value: "fadeIn" },
                { component: <div>fadeOut</div>, value: "fadeOut" },
                { component: <div>shake</div>, value: "shake" },
                { component: <div>swing</div>, value: "swing" },
                { component: <div>slideInLeft</div>, value: "slideInLeft" },
                { component: <div>fadeInUpBig</div>, value: "fadeInUpBig" },
                { component: <div>fadeInLeft</div>, value: "fadeInLeft" },
                { component: <div>fadeInRight</div>, value: "fadeInRight" },
                { component: <div>zoomIn</div>, value: "zoomIn" },
                { component: <div>zoomOut</div>, value: "zoomOut" },
                { component: <div>bounceInDown</div>, value: "bounceInDown" },
                { component: <div>bounceInLeft</div>, value: "bounceInLeft" },
                { component: <div>bounceInRight</div>, value: "bounceInRight" },
                { component: <div>bounceInUp</div>, value: "bounceInUp" },
                { component: <div>bounceOutDown</div>, value: "bounceOutDown" },
                { component: <div>bounceOutLeft</div>, value: "bounceOutLeft" },
                {
                  component: <div>bounceOutRight</div>,
                  value: "bounceOutRight",
                },
                { component: <div>bounceOutUp</div>, value: "bounceOutUp" },
                { component: <div>fadeInDown</div>, value: "fadeInDown" },
                { component: <div>fadeInDownBig</div>, value: "fadeInDownBig" },
                { component: <div>fadeInLeftBig</div>, value: "fadeInLeftBig" },
                {
                  component: <div>fadeInRightBig</div>,
                  value: "fadeInRightBig",
                },
                { component: <div>fadeInUp</div>, value: "fadeInUp" },
                { component: <div>fadeOutDown</div>, value: "fadeOutDown" },
                {
                  component: <div>fadeOutDownBig</div>,
                  value: "fadeOutDownBig",
                },
                { component: <div>fadeOutLeft</div>, value: "fadeOutLeft" },
                {
                  component: <div>fadeOutLeftBig</div>,
                  value: "fadeOutLeftBig",
                },
                { component: <div>fadeOutRight</div>, value: "fadeOutRight" },
                {
                  component: <div>fadeOutRightBig</div>,
                  value: "fadeOutRightBig",
                },
                { component: <div>fadeOutUp</div>, value: "fadeOutUp" },
                { component: <div>fadeOutUpBig</div>, value: "fadeOutUpBig" },
                { component: <div>flash</div>, value: "flash" },
                { component: <div>flip</div>, value: "flip" },
                { component: <div>flipInX</div>, value: "flipInX" },
                { component: <div>flipInY</div>, value: "flipInY" },
                { component: <div>flipOutX</div>, value: "flipOutX" },
                { component: <div>flipOutY</div>, value: "flipOutY" },
                { component: <div>headShake</div>, value: "headShake" },
                { component: <div>hinge</div>, value: "hinge" },
                { component: <div>jello</div>, value: "jello" },
                { component: <div>lightSpeedIn</div>, value: "lightSpeedIn" },
                { component: <div>lightSpeedOut</div>, value: "lightSpeedOut" },
                { component: <div>pulse</div>, value: "pulse" },
                { component: <div>rollIn</div>, value: "rollIn" },
                { component: <div>rollOut</div>, value: "rollOut" },
                { component: <div>rotateIn</div>, value: "rotateIn" },
                {
                  component: <div>rotateInDownLeft</div>,
                  value: "rotateInDownLeft",
                },
                {
                  component: <div>rotateInDownRight</div>,
                  value: "rotateInDownRight",
                },
                {
                  component: <div>rotateInUpLeft</div>,
                  value: "rotateInUpLeft",
                },
                {
                  component: <div>rotateInUpRight</div>,
                  value: "rotateInUpRight",
                },
                { component: <div>rotateOut</div>, value: "rotateOut" },
                {
                  component: <div>rotateOutDownLeft</div>,
                  value: "rotateOutDownLeft",
                },
                {
                  component: <div>rotateOutDownRight</div>,
                  value: "rotateOutDownRight",
                },
                {
                  component: <div>rotateOutUpLeft</div>,
                  value: "rotateOutUpLeft",
                },
                {
                  component: <div>rotateOutUpRight</div>,
                  value: "rotateOutUpRight",
                },
                { component: <div>rubberBand</div>, value: "rubberBand" },
                { component: <div>slideInDown</div>, value: "slideInDown" },
                { component: <div>slideInRight</div>, value: "slideInRight" },
                { component: <div>slideInUp</div>, value: "slideInUp" },
                { component: <div>slideOutDown</div>, value: "slideOutDown" },
                { component: <div>slideOutLeft</div>, value: "slideOutLeft" },
                { component: <div>slideOutRight</div>, value: "slideOutRight" },
                { component: <div>slideOutUp</div>, value: "slideOutUp" },
                { component: <div>tada</div>, value: "tada" },
                { component: <div>wobble</div>, value: "wobble" },
                { component: <div>zoomInDown</div>, value: "zoomInDown" },
                { component: <div>zoomInLeft</div>, value: "zoomInLeft" },
                { component: <div>zoomInRight</div>, value: "zoomInRight" },
                { component: <div>zoomInUp</div>, value: "zoomInUp" },
                { component: <div>zoomOutDown</div>, value: "zoomOutDown" },
                { component: <div>zoomOutLeft</div>, value: "zoomOutLeft" },
                { component: <div>zoomOutRight</div>, value: "zoomOutRight" },
                { component: <div>zoomOutUp</div>, value: "zoomOutUp" },
              ].sort((a, b) => (a.value < b.value ? -1 : 1))}
            />
          ) : null}
        </div>
        {this.state.item ? (
          <div style={{ marginTop: "10px" }}>
            {
              picker(this.state.item, this.state.theme, this.state.anim)
                .Component
            }
            <h2 style={{ color: theme[this.state.theme].textColor }}>
              Code Example
            </h2>
            <TextArea
              readonly
              value={picker(this.state.item, this.state.theme).Example}
              height={"600px"}
              theme={theme[this.state.theme].complement}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
