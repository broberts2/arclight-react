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
import Loader from "./demos/loader";
import _TextArea from "./demos/textarea";
import _Dropdown from "./demos/dropdown";
import FontAwesomeIcon from "./demos/fontawesome";
import Utils_Cookies from "./demos/utils_cookies";
import Utils_SFX from "./demos/utils_sfx";
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
  FontAwesomeIcon,
  Loader,
  ["Header - Stylish Center"]: HeaderStylishCenter,
  ["Header - Stylish Left"]: HeaderStylishLeft,
  Transition,
  Timer,
  TextArea: _TextArea,
  Utils_Cookies,
  Utils_SFX,
};

const picker = (id, THEME, anim) => __Object__[id](THEME);

export default class App extends React.Component {
  state = { item: "Button", theme: "Light", anim: null };
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
            defaultValue={this.state.theme}
            theme={this.state.theme}
            onChange={(e) =>
              this.setState({ theme: e.target.value, item: this.state.item })
            }
            items={Object.keys(theme)
              .map((el) => ({
                component: <div>{el}</div>,
                value: theme[el].complement,
              }))
              .sort((a, b) => (a.value < b.value ? -1 : 1))}
          />
          <h1 style={{ color: theme[this.state.theme].textColor }}>
            Select a Component
          </h1>
          <Dropdown
            defaultValue={this.state.item}
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
