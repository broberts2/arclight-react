import React from "react";
import "./video_loop.css";

class VideoLoop extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    const rand = Math.floor(Math.random() * this.props.videos.length);
    this.state = {
      autoPlayCycleDuration: this.props.duration * 2,
      videoIndex: 1,
      video2Class: "",
      video1: this.createVideo(
        rand - 1 < 0 ? this.props.videos.length - 1 : rand - 1
      ),
      video2: this.createVideo(rand)
    };
  }

  createVideo(index) {
    return (
      <video muted preload="auto" loop autoPlay>
        <source
          src={this.props.videos[index].src}
          type={this.props.videos[index].type}
        />
      </video>
    );
  }

  renderVideo(video) {
    const videoIndex =
      this.state.videoIndex >= this.props.videos.length - 1
        ? 0
        : this.state.videoIndex + 1;
    this.setState({
      [video]: null,
      videoIndex
    });
    this.setState({
      [video]: this.createVideo(videoIndex)
    });
  }

  async autoPlay(waiter) {
    await waiter(this.state.autoPlayCycleDuration / 4);
    this.setState({ video2Class: "anim-video-fade-in" });
    await waiter(this.state.autoPlayCycleDuration / 4);
    this.renderVideo("video1");
    await waiter(this.state.autoPlayCycleDuration / 4);
    this.setState({ video2Class: "anim-video-fade-out" });
    await waiter(this.state.autoPlayCycleDuration / 4);
    this.renderVideo("video2");
  }

  componentDidMount() {
    const waiter = num =>
      new Promise((resolve, reject) => setTimeout(() => resolve(), num));
    this.autoPlay(waiter);
    this.intervalId = setInterval(
      () => this.autoPlay(waiter),
      this.state.autoPlayCycleDuration
    );
  }

  render() {
    return (
      <div className={"video_loop"}>
        <div className={`video1`}>{this.state.video1}</div>
        <div className={`video2 ${this.state.video2Class}`}>
          {this.state.video2}
        </div>
        <div className={"content"}>
          {this.props.children ? this.props.children : null}
        </div>
      </div>
    );
  }
}

export default VideoLoop;
