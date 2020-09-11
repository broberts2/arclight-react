import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faTwitch,
  faRedditSquare,
  faYoutube,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Transition } from "../index";
import theme from "../themes";

const FontAwesomeIndex = {
  coffee: <FontAwesomeIcon icon={faCoffee} />,
  signOut: <FontAwesomeIcon icon={faSignOutAlt} />,
  discord: <FontAwesomeIcon icon={faDiscord} />,
  twitch: <FontAwesomeIcon icon={faTwitch} />,
  reddit: <FontAwesomeIcon icon={faRedditSquare} />,
  youtube: <FontAwesomeIcon icon={faYoutube} />,
  twitter: <FontAwesomeIcon icon={faTwitter} />,
  facebook: <FontAwesomeIcon icon={faFacebook} />,
};

const Container = styled.div`
  padding: 0px;
  font-size: ${(props) => (props.size ? props.size : "24px")};
  color: ${(props) => theme[props.theme].textColor};
`;

export default React.memo((props) => {
  return (
    <Transition trans={props.trans}>
      <ThemeProvider theme={theme}>
        <Container theme={props.theme} size={props.size}>
          {FontAwesomeIndex[props.icon]}
        </Container>
      </ThemeProvider>
    </Transition>
  );
});
