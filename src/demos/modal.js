import React, { useState } from "react";
import { Modal, Button } from "../components/index";

const _Modal_ = () => {
  const [mod, showMod] = React.useState(false);
  return (
    <div>
      <Button pop onClick={() => showMod(!mod)}>
        Click Me!
      </Button>
      <Modal visible={mod} setVisible={(a) => showMod(a)}>
        <h1>Component</h1>
      </Modal>
    </div>
  );
};

export default {
  Component: <_Modal_ />,
  Example: `
  import { Modal } from "arclight-react";

  // const [mod, showMod] = React.useState(false);
  <Modal visible={mod} setVisible={(a) => showMod(a)}>
    <h1>Component</h1>
  </Modal>
  `,
};
