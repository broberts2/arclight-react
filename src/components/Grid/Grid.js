import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { _SearchBar_, Loader } from "../../components/index";
import theme from "../themes";

const Grid = styled.div``;

const Container = styled.div`
  & table {
    width: 100%;
    padding: 0;
    & td {
      text-align: center;
      padding: 0px;
    }
  }
`;

const InnerTable = styled.div`
  width: 100%;
  height: 100%;
  ${(props) => theme[props.theme].scrollbar}
  margin-top: -5px;
  overflow: visible;
  & table {
    width: 100%;
    table-layout: fixed;
  }
`;

const PreviewItem = styled.div`
  padding: 0px;
  height: 100%;
`;

const Item = styled.div`
  padding: 1px;
`;

export default React.memo((props) => {
  let row = [];
  let rows = [];
  const setRow = (row) => rows.push(<tr>{row}</tr>);
  props.items.map((item, i) => {
    row.push(
      <td>
        <Item>{item}</Item>
      </td>
    );
    if ((i + 1) % props.itemsPerRow === 0) {
      setRow(row);
      row = [];
    }
  });
  if (row.length > 0) {
    setRow(row);
  }
  return (
    <ThemeProvider theme={theme}>
      <Loader>
        <Grid>
          {props.search ? (
            <div style={{ marginBottom: "10px" }}>
              <_SearchBar_
                placeholder={"Search"}
                filters={props.filters}
                filtersRight={props.filtersRight}
                width={"50%"}
              />
            </div>
          ) : null}
          <Container>
            <table width={"100%"}>
              <tbody>
                <tr>
                  {props.previewItem && rows.length > 0 ? (
                    <td width={"25%"}>
                      <PreviewItem>{props.previewItem}</PreviewItem>
                    </td>
                  ) : null}
                  <td>
                    <InnerTable
                      theme={props.theme}
                      style={
                        props.previewItem
                          ? {
                              height:
                                props.previewItem.props.height ||
                                props.previewItem.props.style.height,
                              overflowY: "scroll",
                            }
                          : props.height
                          ? { height: props.height, overflowY: "scroll" }
                          : {}
                      }
                    >
                      {rows.length > 0 ? (
                        <table width={"100%"}>
                          <tbody>{rows}</tbody>
                        </table>
                      ) : (
                        <table height={"100%"}>
                          <tbody>
                            <tr>
                              <td>
                                <h1>Set is Empty</h1>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      )}
                    </InnerTable>
                  </td>
                </tr>
              </tbody>
            </table>
          </Container>
        </Grid>
      </Loader>
    </ThemeProvider>
  );
});
