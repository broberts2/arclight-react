import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
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
    <ThemeProvider theme={theme}>
      {loaded ? (
        props.children
      ) : (
        <Loader>
          <ClipLoader />
        </Loader>
      )}
    </ThemeProvider>
  );
});
