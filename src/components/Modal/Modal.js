import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Modal from "react-awesome-modal";
import { Button, FontAwesomeIcon, Transition } from "../index";
import theme from "../themes";

const _calcPos = (pos) => {
  switch (pos) {
    case "left":
      return "15%";
    case "center":
      return "50%";
    case "right":
      return "85%";
  }
};

const _Modal = styled.div`
  position: relative;
  width: calc(100% - 30px);
  height: 100%;
  padding: 15px;
  text-align: center;
  background-color: ${(props) => theme[props.props.theme].backgroundColor};
  border-radius: 4px;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 15px;
  padding: -10px;
  z-index: 5;
`;

const Crown = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  position: absolute;
  top: 25px;
  left: ${(props) => _calcPos(props.props.crown.position)};
  -webkit-transform: translate(
    -${(props) => _calcPos(props.props.crown.position)},
    -50%
  );
  -ms-transform: translate(
    -${(props) => _calcPos(props.props.crown.position)},
    -50%
  );
  transform: translate(
    -${(props) => _calcPos(props.props.crown.position)},
    -50%
  );
  background-color: inherit;
  z-index: 2;
`;

const CrownChild = styled.div`
  width: 75%;
  height: 75%;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  & img {
    width: 100%;
    height: 100%;
  }
  ${(props) => (props.props.crown.constrain ? "overflow: hidden;" : null)}
  z-index: 1000;
`;

const Children = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export default React.memo((props) => {
  return (
    <Transition trans={props.trans}>
      <ThemeProvider theme={theme}>
        <Modal
          visible={props.visible}
          width={"75%"}
          height={"75%"}
          effect="fadeInUp"
          onClickAway={() =>
            !props.disableClickAway ? props.setVisible(false) : null
          }
        >
          <_Modal props={props}>
            {props.crown ? (
              <Crown props={props}>
                <CrownChild props={props}>{props.crown.content}</CrownChild>
              </Crown>
            ) : null}
            <Children>{props.children}</Children>
          </_Modal>
          <CloseButton>
            <Button
              pop
              theme={theme[props.theme].complement}
              onClick={() => props.setVisible(false)}
            >
              <FontAwesomeIcon
                theme={theme[props.theme].complement}
                icon={"signOut"}
              />
            </Button>
          </CloseButton>
        </Modal>
      </ThemeProvider>
    </Transition>
  );
});
