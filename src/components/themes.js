const dark = {
  backgroundColor: "#2e2e2e",
  textColor: "#e0e0e0",
  primaryColor: "#383838",
  lineSeries: ["#47005c", "#006b87", "#a72e49", "#376cc6", "#00ffd9"],
  scrollbar: `::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(#f1f1f1, 0);
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }`,
};

const light = {
  backgroundColor: "#e0e0e0",
  textColor: "#2a2a2a",
  primaryColor: "#aaaaaa",
  lineSeries: ["#47005c", "#006b87", "#a72e49", "#376cc6", "#00ffd9"],
  scrollbar: `::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`,
};

const crimson = {
  backgroundColor: "#690026",
  textColor: "#dfdfdf",
  primaryColor: "#420000",
  lineSeries: ["#47005c", "#006b87", "#a72e49", "#376cc6", "#00ffd9"],
  scrollbar: `::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`,
};

export default { dark, light, crimson };
