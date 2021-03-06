import interfaceMethods from "./__interfaceMethods__";

const render = (canvas, size, coords, style, opacity) => {
  canvas.globalAlpha = opacity;
  canvas.beginPath();
  canvas.arc(coords.x, coords.y, size, 0, 2 * Math.PI, false);
  canvas.fillStyle = style;
  canvas.fill();
};

export default (canvas) => (
  size,
  coords,
  velocity,
  mass,
  bounceFactor,
  style,
  opacity
) => {
  render(canvas, size, coords, style, opacity);
  return interfaceMethods(
    canvas,
    {
      size,
      coords,
      velocityX: velocity.x,
      velocityY: velocity.y,
      mass,
      bounceFactor,
      style,
      opacity,
    },
    render
  );
};
