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

const picker = (id, THEME) => __Object__[id](THEME);

export default class App extends React.Component {
  state = { item: "MediaCycler", theme: "Dark" };
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
            items={Object.keys(theme).map((el) => ({
              component: <div>{el}</div>,
              value: el,
            }))}
          />
          <h1 style={{ color: theme[this.state.theme].textColor }}>
            Select a Component
          </h1>
          <Dropdown
            theme={this.state.theme}
            onChange={(e) =>
              this.setState({ item: e.target.value, theme: this.state.theme })
            }
            items={Object.keys(__Object__).map((el) => ({
              component: <div>{el}</div>,
              value: el,
            }))}
          />
        </div>
        {this.state.item ? (
          <div style={{ marginTop: "10px" }}>
            {picker(this.state.item, this.state.theme).Component}
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
