import interfaceMethods from "./__interfaceMethods__";

const render = (canvas, size, coords, style, opacity) => {
  canvas.globalAlpha = opacity;
  canvas.fillStyle = style;
  canvas.fillRect(coords.x, coords.y, size.width, size.height);
  canvas.globalAlpha = 1;
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
