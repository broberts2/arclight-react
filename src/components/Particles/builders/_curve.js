import interfaceMethods from "./__interfaceMethods__";

const render = (
  canvas,
  coordsFrom,
  coordsTo,
  controls,
  style,
  fill,
  opacity
) => {
  canvas.beginPath();
  canvas.moveTo(coordsFrom.x, coordsFrom.y);
  canvas.bezierCurveTo(
    controls.p1.x,
    controls.p1.y,
    controls.p2.x,
    controls.p2.y,
    coordsTo.x,
    coordsTo.y
  );
  if (fill) {
    canvas.fill();
  } else {
    canvas.stroke();
  }
};

export default (canvas) => (
  coordsFrom,
  coordsTo,
  controls,
  style,
  fill,
  opacity
) => {
  render(canvas, coordsTo, controls, coordsFrom, style, fill, opacity);
  return interfaceMethods(
    canvas,
    {
      coordsTo,
      coordsFrom,
      controls,
      style,
      fill,
      opacity,
    },
    render
  );
};
