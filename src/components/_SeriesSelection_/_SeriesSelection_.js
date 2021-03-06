import React from "react";
import styled from "styled-components";
import { Checkbox, Img, Transition } from "../index";
import theme from "../themes";

const _SeriesSelection_ = styled.div`
  & img {
    width: 30px;
    border-radius: 50%;
  }
`;

export default React.memo((props) => (
  <Transition trans={props.trans}>
    <_SeriesSelection_>
      <table width={"100%"}>
        <tbody>
          {props.data
            ? Object.keys(props.data).map((el, i) => (
                <tr>
                  <td>
                    <Checkbox
                      theme={props.theme}
                      onCheck={() => props.cb(el)}
                    />
                  </td>
                  {props.data[el].img ? (
                    <td>
                      <Img src={props.data[el].img} />
                    </td>
                  ) : null}
                  <td
                    style={{
                      color:
                        theme[props.theme].lineSeries[
                          i % theme[props.theme].lineSeries.length
                        ],
                      fontWeight: "bold",
                    }}
                  >
                    {el}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </_SeriesSelection_>
  </Transition>
));
