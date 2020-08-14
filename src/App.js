import React, { useState } from "react";
import Table from "./demos/table";
import Grid from "./demos/grid";
import DoughnutChart from "./demos/doughnutchart";
import LineChart from "./demos/linechart";
import ParticleContainer from "./demos/particlecontainer";
import Button from "./demos/button";
import Modal from "./demos/modal";
import _Dropdown from "./demos/dropdown";
import { Dropdown } from "./components/index";

const picker = (id) => {
  switch (id) {
    case "Table":
      return Table;
    case "Grid":
      return Grid;
    case "LineChart":
      return LineChart;
    case "DoughnutChart":
      return DoughnutChart;
    case "ParticleContainer":
      return ParticleContainer;
    case "Button":
      return Button;
    case "Dropdown":
      return _Dropdown;
    case "Modal":
      return Modal;
  }
};

function App() {
  const [item, setItem] = React.useState(null);
  return (
    <div className="App" style={{ padding: "50px" }}>
      <h1>Select a Component</h1>
      <Dropdown
        id={"Components"}
        onChange={(e) => setItem(e.target.value)}
        items={[
          { component: <div>Table</div>, value: "Table" },
          { component: <div>Grid</div>, value: "Grid" },
          { component: <div>LineChart</div>, value: "LineChart" },
          { component: <div>DoughnutChart</div>, value: "DoughnutChart" },
          {
            component: <div>ParticleContainer</div>,
            value: "ParticleContainer",
          },
          { component: <div>Button</div>, value: "Button" },
          { component: <div>Modal</div>, value: "Modal" },
        ]}
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
