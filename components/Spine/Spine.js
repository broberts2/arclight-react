import React from "react";
import styled from "styled-components";
import theme from "../themes";
import SpineObject from "./spine-player"
import "./spine-player.css"

const Spine = styled.div``;

export default React.memo((props) => {
  return (
    
      <Spine>
        <div id="player-container" style="width: 100%; height: 100vh;"></div>
        {
          new SpineObject.SpinePlayer("player-container", {
            jsonUrl: "assets/",
            atlasUrl: "assets/",
          })
        }
      </Spine>
    
  );
});
