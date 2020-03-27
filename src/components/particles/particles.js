import React from "react";
import Particles from "react-particles-js";
import "./particles";

let s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://cdn.rawgit.com/progers/pathseg/master/pathseg.js";
document.head.append(s);

const components = props => ({
  a: (
    <Particles
      width={props.width ? props.width : "100%"}
      height={props.height ? props.height : "100%"}
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true
            }
          },
          size: {
            value: 3
          },
          color: {
            value: props.color ? props.color : "#000000"
          },
          shape: {
            stroke: {
              width: 0,
              color: "blue"
            }
          },
          line_linked: {
            color: props.color ? props.color : "#000000",
            width: 1,
            opacity: 1
          },
          move: {
            out_mode: "out",
            speed: 1
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: "push"
            }
          }
        }
      }}
    />
  ),
  b: (
    <Particles
      style={{}}
      width={props.width ? props.width : "100%"}
      height={props.height ? props.height : "100%"}
      params={{
        fps_limit: 60,
        particles: {
          number: {
            value: 50
          },
          size: {
            value: 3
          },
          color: {
            value: props.color ? props.color : "#000000"
          },
          line_linked: {
            color: props.color ? props.color : "#000000"
          }
        },
        polygon: {
          enable: true,
          scale: 1,
          type: "inline",
          move: {
            radius: 10
          },
          url: require("./elk.svg"),
          inline: {
            arrangement: "equidistant"
          },
          draw: {
            enable: true,
            stroke: {
              color: "rgba(255, 255, 255, .2)"
            }
          }
        },
        retina_detect: false,
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: "bubble"
            }
          },
          modes: {
            bubble: {
              size: 6,
              distance: 40
            }
          }
        }
      }}
    />
  )
});

export default function _Particles(props) {
  return <div className={"particles"}>{components(props)[props.style]}</div>;
}
