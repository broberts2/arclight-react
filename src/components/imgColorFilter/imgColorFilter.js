const _filterUnitIndex = {
  blur: "px",
  brightness: "%",
  contrast: "%",
  ["drop-shadow"]: "",
  grayscale: "%",
  ["hue-rotate"]: "deg",
  invert: "%",
  opacity: "%",
  saturate: "%",
  sepia: "%",
};

const _mapper = (obj) =>
  Object.keys(obj)
    .map((key) =>
      _filterUnitIndex[key]
        ? `${key}(${obj[key]}${_filterUnitIndex[key]})`
        : null
    )
    .filter((el) => el)
    .join(" ");

const _rgb = (obj) => console.log(obj);

export default (obj) =>
  obj ? (obj.r && obj.g && obj.b ? _rgb(obj) : `${_mapper(obj)}`) : "";
