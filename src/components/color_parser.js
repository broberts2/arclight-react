export default function color_parser(color) {
  switch (color) {
    case "white":
      return `invert(100%) sepia(100%) saturate(0%) hue-rotate(53deg) brightness(108%) contrast(105%)`;
    case "maroon":
      return `invert(9%) sepia(54%) saturate(5544%) hue-rotate(2deg) brightness(109% contrast(121%)`;
    case "light-blue":
      return `invert(73%) sepia(55%) saturate(2172%) hue-rotate(158deg) brightness(106%) contrast(102%)`;
    case "gray-black":
      return `invert(9%) sepia(4%) saturate(2312%) hue-rotate(277deg) brightness(89%) contrast(89%);`;
  }
}
