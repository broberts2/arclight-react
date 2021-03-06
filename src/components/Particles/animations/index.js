import cubeExplode from "./_cubeExplode";
import flame from "./_flame";
import spiritual from "./_spiritual";

export default (canvasWidth, canvasHeight) => ({
  cubeExplode: cubeExplode(canvasWidth, canvasHeight),
  flame: flame(canvasWidth, canvasHeight),
  spiritual: spiritual(canvasWidth, canvasHeight),
});
