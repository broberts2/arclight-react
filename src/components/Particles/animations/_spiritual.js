export default (canvasWidth, canvasHeight) => (
  Builders,
  Origin,
  particleColor
) => {
  // Particle Container
  const _ = {};

  let interval = 0;

  const spawn = (n) => {
    if (!_[n]) {
      const size = Math.random() * 2 + 0.5;
      _[n] = Builders.sphere(
        size,
        {
          x: Origin.x - size / 2 + (Math.random() * 20 - 40),
          y: Origin.y - size / 2 + (Math.random() * 20 - 40),
        },
        {
          x: ((Math.random() * 1.5 - 0.75) * canvasWidth) / 900,
          y: -(((Math.random() * 0.75 + 0.1) * canvasHeight) / 650),
        },
        0,
        0,
        particleColor ? particleColor : "#7502bb",
        0
      );
    } else {
      spawn(++n);
    }
  };

  const inc = 0.01;
  const maxOpacity = 1;

  const decideOpacity = (key) => {
    if (_[key].mass < 1) {
      _[key].mass += inc / 2;
      _[key].opacity =
        _[key].opacity + inc / 2 > maxOpacity
          ? maxOpacity
          : _[key].opacity + inc / 2;
    } else {
      if (_[key].opacity <= 0) {
        delete _[key];
      } else {
        _[key].opacity =
          _[key].opacity - inc / 4 < 0 ? 0 : _[key].opacity - inc / 4;
      }
    }
  };

  // Frame Animation
  const _animate_ = (animationList, animName, canvasWidth, canvasHeight) => {
    if (interval > 25) {
      interval = 0;
      spawn(0);
    } else {
      interval = interval + Math.floor(Math.random() * 7.5 + 2);
    }
    Object.keys(_).map((key) => {
      _[key].moveAbsoluteBy(_[key].velocityX, _[key].velocityY);
      decideOpacity(key);
    });
  };

  return (animationList, animName) =>
    _animate_(animationList, animName, canvasWidth, canvasHeight);
};
