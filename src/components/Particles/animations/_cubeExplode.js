export default (canvasWidth, canvasHeight) => (
  Builders,
  Origin,
  particleColor
) => {
  // Particle Container
  const _ = {};

  // Frame Animation
  const _animate_ = (animationList, animName, canvasWidth, canvasHeight) => {
    let stopAnimation = true;
    for (let i in _) {
      stopAnimation = false;
      if (_[i].coords.y - _[i].size.height < 0) {
        _[i].setVelocity(
          _[i].velocityX,
          _[i].velocityY < 0 ? -_[i].velocityY : _[i].velocityY
        );
      } else if (_[i].coords.y + _[i].size.height > canvasHeight) {
        _[i].setVelocity(
          _[i].velocityX * _[i].bounceFactor,
          _[i].velocityY < 0
            ? _[i].velocityY
            : -_[i].velocityY * _[i].bounceFactor
        );
      }
      if (_[i].coords.x + _[i].size.width > canvasWidth || _[i].coords.x < 0) {
        _[i].setVelocity(-_[i].velocityX, _[i].velocityY);
      }
      _[i].setVelocity(_[i].velocityX, _[i].velocityY + 0.1 * _[i].mass);
      if (
        Math.abs(_[i].velocityX) > 0.001 ||
        _[i].coords.y < canvasHeight - _[i].size.height
      ) {
        _[i].moveAbsoluteBy(_[i].velocityX, _[i].velocityY);
      } else {
        if (_[i].opacity > 0.1) {
          _[i].setOpacity(_[i].opacity - 0.1);
          _[i].moveAbsoluteTo(_[i].coords.x, canvasHeight - _[i].size.height);
        } else {
          delete _[i];
        }
      }
    }
    if (stopAnimation) delete animationList[animName];
  };

  // Setup
  for (let i = 0; i < 3000; i++) {
    let size = 2;
    _[i] = Builders.rectangle(
      { width: size, height: size },
      {
        x: Origin.x - size / 2 + (Math.random() * 80 - 40),
        y: Origin.y - size / 2 + (Math.random() * 80 - 40),
      },
      {
        x: Math.random() * 15 - 7.5,
        y: Math.random() * 10 - Math.random() * 15,
      },
      Math.random() * 3 + 1,
      Math.random() * 0.3 + 0.1,
      particleColor ? particleColor : "#660080",
      1
    );
  }
  return (animationList, animName) =>
    _animate_(animationList, animName, canvasWidth, canvasHeight);
};
