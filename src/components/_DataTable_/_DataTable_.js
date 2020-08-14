import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../themes";

const _DataTable_ = styled.div``;

const InfoBar = styled.div`
  width: 100%;
  margin-top: 75px;
  & table {
    width: 100%;
    table-layout: fixed;
    & td {
      text-align: right;
    }
    & th {
      text-align: right;
    }
  }
`;

const InfoBarRow = (obj) => (
  <tr>
    <table style={{ marginBottom: "15px" }}>
      <tbody>
        <tr>
          {Object.keys(obj).map((keyName) =>
            keyName.includes("__keyfill__") ? <th /> : <th>{keyName}</th>
          )}
        </tr>
        <tr>
          {Object.keys(obj).map((keyName) =>
            keyName.includes("__keyfill__") ? <th /> : <td>{obj[keyName]}</td>
          )}
        </tr>
      </tbody>
    </table>
  </tr>
);

const ConstructInfoBarRows = (data, rowCount) => {
  if (data && Object.keys(data).length > 0) {
    let rows = [];
    let obj = {};
    Object.keys(data).map((keyName, i) => {
      obj[keyName] = data[keyName];
      if ((i + 1) % rowCount === 0) {
        rows.push(InfoBarRow(obj));
        obj = {};
      }
    });
    if (Object.keys(obj).length > 0) {
      for (let i = Object.keys(obj).length; i < rowCount; i++) {
        obj[`__keyfill__${i}`] = false;
      }
      rows.push(InfoBarRow(obj));
    }
    return rows;
  }
};

const Operations = {
  SeriesNum: (dataArray) =>
    dataArray && dataArray.length > 0 ? dataArray.length : null,
  TotalAverage: (dataArray, dec) =>
    dataArray && dataArray.length > 0
      ? (
          dataArray.map((el) => el[el.length - 1].y).reduce((a, b) => a + b) /
          dataArray.length
        ).toFixed(dec)
      : null,
  Mean: (dataArray, dec) =>
    dataArray && dataArray.length > 0
      ? (
          dataArray
            .map((el) =>
              el.length > 1
                ? el.reduce((a, b) => (a.y ? a.y : a) + (b.y ? b.y : b)) /
                  el.length
                : el[0].y
            )
            .reduce((a, b) => a + b) / dataArray.length
        ).toFixed(dec)
      : null,
  Median: (dataArray, dec) =>
    dataArray && dataArray.length > 0
      ? (
          dataArray
            .map((el) =>
              el.length % 2 === 0
                ? (el[el.length / 2 - 1].y + el[el.length / 2].y) / 2
                : el[Math.floor(el.length / 2)].y
            )
            .reduce((a, b) => a + b) / dataArray.length
        ).toFixed(dec)
      : null,
  Max: (dataArray, dec) =>
    dataArray && dataArray.length > 0
      ? dataArray
          .map((el) => el.map((el) => el.y).reduce((a, b) => (b > a ? b : a)))
          .reduce((a, b) => (b > a ? b : a))
          .toFixed(dec)
      : null,
  Min: (dataArray, dec) =>
    dataArray && dataArray.length > 0
      ? dataArray
          .map((el) => el.map((el) => el.y).reduce((a, b) => (b < a ? b : a)))
          .reduce((a, b) => (b < a ? b : a))
          .toFixed(dec)
      : null,
};

const CalculateTable = (data, dec, rowCount, crosshairValue) => {
  const dataSet = Object.values(data)
    .filter((el) => (el.visible ? el : null))
    .map((el) =>
      crosshairValue ? el.data.slice(0, crosshairValue.index + 1) : el.data
    );
  const _mod = dataSet.length > 1 ? " Average " : " ";
  const _mod2 = dataSet.length > 1 ? " Total  " : "";
  if (dataSet.length > 0) {
    return ConstructInfoBarRows(
      {
        [`Series${_mod}Mean`]: Operations.Mean(dataSet, dec),
        [`Series${_mod}Median`]: Operations.Median(dataSet, dec),
        [`Series${_mod}Total`]: Operations.TotalAverage(dataSet, dec),
        [`${_mod2}Series Max`]: Operations.Max(dataSet, dec),
        [`${_mod2}Series Min`]: Operations.Min(dataSet, dec),
        [`Series Analysis Count`]: Operations.SeriesNum(dataSet),
      },
      rowCount
    );
  }
};

export default (props) => (
  <ThemeProvider theme={theme}>
    <_DataTable_>
      <InfoBar>
        <table>
          <tbody>
            {CalculateTable(
              props.data,
              props.decimal,
              props.dataTableColumns,
              props.crosshairValue
            )}
          </tbody>
        </table>
      </InfoBar>
    </_DataTable_>
  </ThemeProvider>
);
