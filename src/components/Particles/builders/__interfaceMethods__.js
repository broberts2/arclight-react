export default (canvas, object, render) =>
  Object.assign(object, {
    morphCurve: (coordsFrom, coordsTo, controls, style, opacity) =>
      render(
        canvas,
        (object.coordsFrom = coordsFrom),
        (object.coordsTo = coordsTo),
        controls,
        (object.style = style),
        (object.opacity = opacity)
      ),
    moveAbsoluteBy: (x, y) =>
      render(
        canvas,
        object.size,
        (object.coords = { x: object.coords.x + x, y: object.coords.y + y }),
        object.style,
        object.opacity
      ),
    morphSize: (width, height) =>
      render(
        canvas,
        (object.size = { width, height }),
        object.coords,
        object.style,
        object.opacity
      ),
    moveAbsoluteTo: (x, y) =>
      render(
        canvas,
        object.size,
        (object.coords = { x, y }),
        object.style,
        object.opacity
      ),
    setVelocity: (velocityX, velocityY) => {
      object.velocityX = velocityX;
      object.velocityY = velocityY;
    },
    setOpacity: (opacity) => (object.opacity = opacity),
  });
