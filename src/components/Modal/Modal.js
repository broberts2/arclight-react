import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Modal from "react-awesome-modal";
import { Button, MaterialIcon } from "../index";
import theme from "../themes";

const _Modal = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 15px;
  text-align: center;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 15px;
  padding: -10px;
`;

export default React.memo((props) => {
  return (
    <ThemeProvider theme={theme}>
      <Modal
        visible={props.visible}
        width={"75%"}
        height={"75%"}
        effect="fadeInUp"
        onClickAway={() => props.setVisible(false)}
      >
        <_Modal>{props.children}</_Modal>
        <CloseButton>
          <Button onClick={() => props.setVisible(false)}>
            <MaterialIcon icon={"exit"} size={24} />
          </Button>
        </CloseButton>
      </Modal>
    </ThemeProvider>
  );
});
