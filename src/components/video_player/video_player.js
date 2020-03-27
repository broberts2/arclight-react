import React, { Component } from "react";
import Fullscreen from "react-full-screen";
import { FontAwesomeIcon, Animation, Slider } from "../index";
import Styles from "./styles";

export default function VideoPlayer(props) {
  const baseOpacity = 0.5;
  const baseAnimationSpeed = 0.2;
  const style = Styles[props.style];
  const [timeOut, setTimeOut] = React.useState(0);
  const [fullScreen, setFullScreen] = React.useState(false);
  const [titleAnimation, setTitleAnimation] = React.useState("slideOutLeft");
  const [sliderAnimation, setSliderAnimation] = React.useState("slideOutDown");
  const [controlsAnimation, setControlsAnimation] = React.useState(
    "slideOutRight"
  );
  const [screenOpacity, setScreenOpacity] = React.useState(baseOpacity);
  const [audioSliderWidth, setAudioSliderWidth] = React.useState(0);
  const [controlsPlayButton, setControlsPlayButton] = React.useState(
    "play-circle"
  );
  const [currentTime, setCurrentTime] = React.useState(0);
  const [trackTime, setTrackTime] = React.useState(0);
  const [volume, setVolume] = React.useState({ vol: 100, icon: "volume-up" });
  const playToggle = () => {
    const el = document.getElementById(props.id);
    if (el) {
      if (el.paused) {
        el.play();
        setScreenOpacity(0);
        setControlsPlayButton("pause-circle");
      } else {
        el.pause();
        setScreenOpacity(baseOpacity);
        setControlsPlayButton("play-circle");
      }
    }
  };
  const _setTrackTime = e => {
    setTrackTime((e.currentTime / e.duration) * 100);
  };
  const _setCurrentTime = (currentTime, duration) => {
    currentTime = {
      sec: Math.floor(currentTime % 60),
      min: Math.floor(currentTime / 60)
    };
    duration = {
      sec: Math.floor(duration % 60),
      min: Math.floor(duration / 60)
    };
    setCurrentTime(
      `${currentTime.min}:${
        currentTime.sec < 10 ? `0${currentTime.sec}` : currentTime.sec
      }/${duration.min}:${
        duration.sec < 10 ? `0${duration.sec}` : duration.sec
      }`
    );
  };
  const _mouseEnter = () => {
    setScreenOpacity(0);
    setTitleAnimation("slideInLeft");
    setSliderAnimation("slideInUp");
    setControlsAnimation("slideInRight");
  };
  const _mouseLeave = () => {
    if (document.getElementById(props.id).paused) setScreenOpacity(baseOpacity);
    setTitleAnimation("slideOutLeft");
    setSliderAnimation("slideOutDown");
    setControlsAnimation("slideOutRight");
  };
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (timeOut >= 0) {
        setTimeOut(timeOut - 1);
        if (timeOut <= 0) {
          _mouseLeave();
        }
      }
    }, 1000);
    const loadVideo = () => {
      if (!document.getElementById(props.id)) {
        setTimeout(() => loadVideo(), 10);
      } else {
        const vid = document.getElementById(props.id);
        vid.addEventListener(
          "ended",
          e => {
            setControlsPlayButton("play-circle");
            setScreenOpacity(baseOpacity);
          },
          false
        );
        _setCurrentTime(vid.currentTime, vid.duration);
        vid.ontimeupdate = e => {
          _setTrackTime(e.target);
          _setCurrentTime(e.target.currentTime, e.target.duration);
        };
      }
    };
    loadVideo();
    return () => {
      clearInterval(timer);
    };
  }, [timeOut]);
  const _setTimeOut = () => {
    if (timeOut <= 0) _mouseEnter();
    setTimeOut(3);
  };
  return (
    <Fullscreen enabled={fullScreen}>
      <div
        className={`video_player ${
          props.palette ? props.palette : props.style
        }`}
      >
        <div
          className={`container`}
          onMouseEnter={() => _mouseEnter()}
          onMouseMove={() => _setTimeOut()}
          onMouseLeave={() => _mouseLeave()}
        >
          <video
            id={props.id}
            loop={props.loop ? props.loop : false}
            preload="auto"
            onClick={() => {
              playToggle();
            }}
          >
            <source src={props.src} />
          </video>
          <div className={"screen"} style={{ opacity: screenOpacity }}></div>
          <div
            className={`play-bttn`}
            style={{ opacity: screenOpacity > 0 ? 1 : 0 }}
          >
            <FontAwesomeIcon
              style={"a"}
              color={"white"}
              data={{ img: "play-circle", type: "regular", size: "15%" }}
            />
          </div>
          <div className={"title"}>
            <Animation
              animationName={titleAnimation}
              duration={baseAnimationSpeed}
            >
              <b>{props.title}</b>
            </Animation>
          </div>
          <div className={"slider"}>
            <Animation
              animationName={sliderAnimation}
              duration={baseAnimationSpeed}
            >
              <Slider
                value={trackTime}
                onChange={(e, max) => {
                  const vid = document.getElementById(props.id);
                  vid.currentTime = Math.floor(
                    (e.target.value / max) * vid.duration
                  );
                  _setTrackTime(vid);
                  _setCurrentTime(vid.currentTime, vid.duration);
                }}
                max={100}
              />
            </Animation>
          </div>
          <div className={"controls"}>
            <Animation
              animationName={controlsAnimation}
              duration={baseAnimationSpeed}
            >
              <div
                style={{
                  position: "absolute",
                  left: "15px",
                  display: "inline-flex"
                }}
              >
                <div style={{ marginRight: "15px" }}>
                  <FontAwesomeIcon
                    onClick={() => playToggle()}
                    style={"a"}
                    color={"white"}
                    data={{
                      img: controlsPlayButton,
                      type: "solid",
                      size: "35px"
                    }}
                  />
                </div>
                <div style={{ marginRight: "15px" }}>
                  <FontAwesomeIcon
                    style={"a"}
                    color={"white"}
                    data={{ img: "step-forward", type: "solid", size: "35px" }}
                  />
                </div>
                <div
                  style={{ display: "inline-flex" }}
                  onMouseEnter={() => setAudioSliderWidth(100)}
                  onMouseLeave={() => setAudioSliderWidth(0)}
                >
                  <FontAwesomeIcon
                    style={"a"}
                    color={"white"}
                    data={{ img: volume.icon, type: "solid", size: "35px" }}
                  />
                  <div
                    className={"volume-slider"}
                    style={{
                      width: `${audioSliderWidth}%`,
                      opacity: audioSliderWidth > 0 ? 1 : 0
                    }}
                  >
                    <Slider
                      value={volume.vol}
                      onChange={e => {
                        setVolume({
                          vol: e.target.value,
                          icon: (() => {
                            if (e.target.value >= 75) return "volume-up";
                            else if (e.target.value >= 25) return "volume-down";
                            else if (e.target.value > 0) return "volume-off";
                            else return "volume-mute";
                          })()
                        });
                        document.getElementById(props.id).volume =
                          e.target.value / 100;
                      }}
                    />
                  </div>
                  <div className={"time-display"}>{currentTime}</div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "15px",
                  display: "inline-flex"
                }}
              >
                <FontAwesomeIcon
                  style={"a"}
                  color={"white"}
                  data={{
                    img: fullScreen ? "compress" : "expand",
                    type: "solid",
                    size: "35px"
                  }}
                  onClick={() => setFullScreen(!fullScreen)}
                />
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </Fullscreen>
  );
}
