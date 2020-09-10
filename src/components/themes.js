const dark = {
  complement: "light",
  backgroundColor: "#2e2e2e",
  textColor: "#e0e0e0",
  secondaryTextColor: "#e0e0e0",
  primaryColor: "#383838",
  secondaryColor: "#c1c1c1",
  primaryActiveColor: "#161515",
  secondaryActiveColor: "#c1c1c1",
  primaryHoverColor: "#53184a",
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
  complement: "dark",
  backgroundColor: "#d7d7d7",
  textColor: "#121212",
  secondaryTextColor: "#212121",
  primaryColor: "#cdcdcd",
  secondaryColor: "#b5b5b5",
  primaryActiveColor: "#161515",
  secondaryActiveColor: "#c1c1c1",
  primaryHoverColor: "#53184a",
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

export default { dark, light };