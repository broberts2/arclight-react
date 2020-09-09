import React, { useState } from "react";
import Table from "./demos/table";
import Grid from "./demos/grid";
import DoughnutChart from "./demos/doughnutchart";
import LineChart from "./demos/linechart";
import Button from "./demos/button";
import Modal from "./demos/modal";
import HoverCard from "./demos/hovercard";
import CheckBox from "./demos/checkbox";
import Particles from "./demos/particles";
import _Dropdown from "./demos/dropdown";
import { Dropdown } from "./components/index";

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
};

const picker = (id) => __Object__[id];

function App() {
  const [item, setItem] = React.useState(null);
  return (
    <div
      className="App"
      style={{
        padding: "50px",
        minHeight: "100vh",
      }}
    >
      <h1>Select a Component</h1>
      <Dropdown
        id={"Components"}
        onChange={(e) => setItem(e.target.value)}
        items={Object.keys(__Object__).map((el) => ({
          component: <div>{el}</div>,
          value: el,
        }))}
      />
      {item ? (
        <div>
          {picker(item).Component}
          <h2>Code Example</h2>
          <textarea
            readonly
            style={{ width: "100%", height: "600px", resize: "none" }}
            value={picker(item).Example}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
