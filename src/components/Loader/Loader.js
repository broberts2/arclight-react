import React from "react";
import styled from "styled-components";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import CircleLoader from "react-spinners/CircleLoader";
import BeatLoader from "react-spinners/BeatLoader";
import BarLoader from "react-spinners/BarLoader";
import BounceLoader from "react-spinners/BounceLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ClockLoader from "react-spinners/ClockLoader";
import DotLoader from "react-spinners/DotLoader";
import FadeLoader from "react-spinners/FadeLoader";
import GridLoader from "react-spinners/GridLoader";
import HashLoader from "react-spinners/HashLoader";
import MoonLoader from "react-spinners/MoonLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import PulseLoader from "react-spinners/PulseLoader";
import PuffLoader from "react-spinners/PuffLoader";
import RingLoader from "react-spinners/RingLoader";
import RiseLoader from "react-spinners/RiseLoader";
import RotateLoader from "react-spinners/RotateLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import SkewLoader from "react-spinners/SkewLoader";
import SquareLoader from "react-spinners/SquareLoader";
import SyncLoader from "react-spinners/SyncLoader";
import { Transition } from "../index";
import theme from "../themes";

const _INDEX_ = (props) => {
  const size = props.size ? props.size : 10;
  const color = props.color ? props.color : theme[props.theme].textColor;
  return {
    ClipLoader: <ClipLoader size={size} color={color} />,
    CircleLoader: <CircleLoader size={size} color={color} />,
    BeatLoader: <BeatLoader size={size} color={color} />,
    BarLoader: <BarLoader size={size} color={color} />,
    BounceLoader: <BounceLoader size={size} color={color} />,
    ClimbingBoxLoader: <ClimbingBoxLoader size={size} color={color} />,
    ClockLoader: <ClockLoader size={size} color={color} />,
    DotLoader: <DotLoader size={size} color={color} />,
    FadeLoader: <FadeLoader size={size} color={color} />,
    GridLoader: <GridLoader size={size} color={color} />,
    HashLoader: <HashLoader size={size} color={color} />,
    MoonLoader: <MoonLoader size={size} color={color} />,
    PacmanLoader: <PacmanLoader size={size} color={color} />,
    PropagateLoader: <PropagateLoader size={size} color={color} />,
    PulseLoader: <PulseLoader size={size} color={color} />,
    PuffLoader: <PuffLoader size={size} color={color} />,
    RingLoader: <RingLoader size={size} color={color} />,
    RiseLoader: <RiseLoader size={size} color={color} />,
    RotateLoader: <RotateLoader size={size} color={color} />,
    ScaleLoader: <ScaleLoader size={size} color={color} />,
    SkewLoader: <SkewLoader size={size} color={color} />,
    SquareLoader: <SquareLoader size={size} color={color} />,
    SyncLoader: <SyncLoader size={size} color={color} />,
  };
};

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default React.memo((props) => {
  const [loaded, setLoaded] = React.useState(
    props.loaded ? props.loaded : false
  );
  if (props.loaded === undefined) {
    React.useEffect(() => {
      setLoaded(true);
    });
  }
  React.useEffect(() => {
    setLoaded(props.loaded);
  }, [props.loaded]);
  return (
    <Transition inheritDimensions trans={props.trans}>
      <Wrapper>
        <Loader>{loaded ? props.children : _INDEX_(props)[props.type]}</Loader>
      </Wrapper>
    </Transition>
  );
});
