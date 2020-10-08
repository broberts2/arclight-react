import React from "react";

const SFX_INDEX = {
  ding: require("./sfx/ding.wav"),
  drop: require("./sfx/drop.wav"),
};

export default {
  play: (sound) => {
    const SFX = new Audio(SFX_INDEX[sound]);
    SFX.play();
  },
};
