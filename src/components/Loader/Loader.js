import React from "react";
import styled from "styled-components";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { Transition } from "../index";
import theme from "../themes";

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50);
`;

export default React.memo((props) => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setLoaded(true);
  });
  return (
    <Transition trans={props.trans}>
      
        {loaded ? (
          props.children
        ) : (
          <Loader>
            <ClipLoader />
          </Loader>
        )}
      
    </Transition>
  );
});
