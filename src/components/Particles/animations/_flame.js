export default (canvasWidth, canvasHeight) => (
  Builders,
  Origin,
  particleColor
) => {
  // Particle Container
  const _ = {};

  // Frame Animation
  const _animate_ = (animationList, animName, canvasWidth, canvasHeight) => {
    _.base.moveAbsoluteBy(0, 0);
    _.curve1.morphCurve(
      _.curve1.coordsFrom,
      _.curve1.coordsTo,
      _.curve1.controls,
      _.curve1.style,
      _.curve1.opacity
    );
  };

  // Setup
  const size = 75;
  _.base = Builders.sphere(
    size,
    {
      x: canvasWidth / 2,
      y: canvasHeight / 2,
    },
    {
      x: 0,
      y: 0,
    },
    1,
    0.4,
    "#830007",
    1
  );
  _.curve1 = Builders.curve(
    {
      x: canvasWidth / 2,
      y: canvasHeight / 2,
    },
    {
      x: canvasWidth / 4,
      y: canvasHeight / 4,
    },
    {
      p1: {
        x: 100,
        y: 100,
      },
      p2: {
        x: 300,
        y: 300,
      },
    },
    "#830007",
    false,
    1
  );
  return (animationList, animName) =>
    _animate_(animationList, animName, canvasWidth, canvasHeight);
};
