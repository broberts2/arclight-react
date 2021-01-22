import React from "react";
import styled from "styled-components";
import { Transition, _Canvas_ } from "../index";
import theme from "../themes";

const VerticalDividerSemiCircle = styled.div`
  width: 100%;
  height: ${props => props.height ? props.height : "0"};
`;

export default React.memo((props) => (
  <Transition trans={props.trans}>
      <VerticalDividerSemiCircle height={props.height}>
        <_Canvas_ instruct={[
          {
              type: "drawLine",
              origin: {
                x: 0, y: 50
              },
              to: {
                x: 45, y: 50
              },
              color: "white",
              strength: 3
          },
          {
              type:"drawCircle",
              origin: {
                x: 50, y: 50
              },
              color: "white",
              strength: 2
          }
      ]} />
      </VerticalDividerSemiCircle>
  </Transition>
));
