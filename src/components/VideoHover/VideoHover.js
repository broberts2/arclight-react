import React from "react";
import styled from "styled-components";
import { Transition } from "../index";
import theme from "../themes";

const VideoHover = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
`;

export default class _ extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  state = {
    playing: false,
  };

  setPlaying(playing) {
    this.setState({ playing });
    if (playing) {
      this.videoRef.current.play();
    } else {
      this.videoRef.current.pause();
    }
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.playing !== null &&
      this.props.playing !== newProps.playing
    ) {
      this.setPlaying(newProps.playing);
    }
  }

  render() {
    return (
      <Transition inheritDimensions trans={this.props.trans}>
        <VideoHover
          onMouseEnter={() =>
            !this.props.playing ? this.setPlaying(true) : null
          }
          onMouseLeave={() =>
            !this.props.playing ? this.setPlaying(false) : null
          }
        >
          <video
            ref={this.videoRef}
            height={"100%"}
            preload
            loop
            muted
            src={this.props.src}
            style={{
              transition: "all 0.25s ease",
              opacity: this.state.playing
                ? 1
                : this.props.fadeOnPause
                ? 0.3
                : 1,
            }}
          />
        </VideoHover>
      </Transition>
    );
  }
}
