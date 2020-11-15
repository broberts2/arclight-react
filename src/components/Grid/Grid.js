import React from "react";
import styled from "styled-components";
import { _SearchBar_, Transition } from "../index";
import theme from "../themes";

const Grid = styled.div`
  height: 100%;
  width: 100%;
`;

const InnerTable = styled.div`
  height: ${(props) => (props.search ? "calc(100% - 77.5px)" : "100%")};
  width: 100%;
  overflow-y: auto;
  overlow-x: hidden;
  & table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
  }
`;

const Search = styled.div`
  margin-bottom: 20px;
`;

export default React.memo((props) => {
  let row = [];
  let rows = [];
  const setRow = (row) => rows.push(<tr>{row}</tr>);
  props.items.map((item, i) => {
    row.push(<td>{item}</td>);
    if ((i + 1) % props.itemsPerRow === 0) {
      setRow(row);
      row = [];
    }
  });
  if (row.length > 0) {
    setRow(row);
  }
  return (
    <Transition inheritDimensions trans={props.trans}>
      <Grid>
        {props.search ? (
          <Search>
            <_SearchBar_
              onChange={
                props.onSearchChange ? (e) => props.onSearchChange(e) : null
              }
              theme={theme[props.theme].complement}
              placeholder={"Search"}
              filters={props.filters}
              filtersRight={props.filtersRight}
              width={props.search}
            />
          </Search>
        ) : null}
        <InnerTable theme={props.theme} search={props.search}>
          <table>
            <tbody>
              <tr>{rows}</tr>
            </tbody>
          </table>
        </InnerTable>
      </Grid>
    </Transition>
  );
});
