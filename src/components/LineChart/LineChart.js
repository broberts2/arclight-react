import React from "react";
import styled from "styled-components";
import theme from "../themes";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  Crosshair,
} from "react-vis";
import Zoom from "@material-ui/core/Zoom";
import AutoSizer from "react-virtualized-auto-sizer";
import {
  Checkbox,
  MaterialIcon,
  _DataTable_,
  _SeriesSelection_,
  Img,
  Transition,
} from "../index";

const LineChart = styled.div`
  margin: 20px;
  position: relative;
`;

const CustomIcon = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 100;
  pointer-events: none;
`;

const NoneSelected = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  -webkit-transform: translate(-50%, -25%),
  -ms-transform: translate(-50%, -25%),
  transform: translate(-50%, -25%),
`;

const Tooltip = styled.div`
  white-space: nowrap;
  margin: 20px;
  background-color: ${(props) => theme[props._theme].backgroundColor};
  border-radius: 4px;
  padding: 20px;
  color: ${(props) => theme[theme[props._theme].complement].backgroundColor};
  & .body {
    margin-bottom: -20px;
    & img {
      border-radius: 50%;
      width: 25px;
    }
  }
`;

const Lines = (props) => {
  const crosshairValues = props.crosshairValue
    ? Object.keys(props.data)
        .filter((el) => (props.data[el].visible ? props.data[el] : null))
        .map((el) => {
          props.data[el].data[props.crosshairValue.index].series = el;
          props.data[el].data[props.crosshairValue.index].xUnit =
            props.data[el].xAxis;
          props.data[el].data[props.crosshairValue.index].yUnit =
            props.data[el].yAxis;
          props.data[el].data[props.crosshairValue.index].img =
            props.data[el].img;
          return props.data[el].data[props.crosshairValue.index];
        })
    : null;
  return (
    <div
      style={{
        height: props.height,
        color: theme[theme[props.theme].complement].textColor,
      }}
    >
      {props.locked ? (
        <CustomIcon>
          <MaterialIcon icon={"lock"} />
        </CustomIcon>
      ) : (
        <CustomIcon>
          <MaterialIcon icon={"lockopen"} />
        </CustomIcon>
      )}
      {props.lineSeries &&
      props.lineSeries.length > 0 &&
      props.data &&
      Object.values(props.data)[0] ? (
        <h3>{Object.values(props.data)[0].yAxis}</h3>
      ) : null}
      <AutoSizer>
        {({ height, width }) => (
          <XYPlot
            width={width}
            height={height}
            onMouseLeave={() =>
              !props.locked ? props.setCrosshairValue(null) : null
            }
            onNearestX={(value, { index }) =>
              !this.props.locked && false
                ? this.props.setCrosshairValue({ value, index })
                : null
            }
            onClick={() => props.setLocked(!props.locked)}
          >
            {props.showAxis ? (
              <XAxis
                style={{
                  line: {
                    stroke: theme[props.theme].backgroundColor,
                  },
                  ticks: {
                    stroke: theme[props.theme].backgroundColor,
                  },
                  text: {
                    stroke: theme[theme[props.theme].complement].textColor,
                  },
                }}
              />
            ) : null}
            {props.showAxis ? (
              <YAxis
                style={{
                  line: {
                    stroke: theme[props.theme].backgroundColor,
                  },
                  ticks: {
                    stroke: theme[props.theme].backgroundColor,
                  },
                  text: {
                    stroke: theme[theme[props.theme].complement].textColor,
                  },
                }}
              />
            ) : null}
            {props.lineSeries.length > 0 ? props.lineSeries : null}
            {props.crosshairValue && crosshairValues ? (
              <Crosshair
                values={crosshairValues}
                style={{
                  line: {
                    backgroundColor: theme[props.theme].backgroundColor,
                    width: "2px",
                    borderRadius: "50% 50% 0px 0px",
                    height: props.height - 50,
                    marginTop: "0px",
                    marginLeft: "-1px",
                  },
                }}
              >
                <Tooltip _theme={props.theme}>
                  <h2 style={{ marginBottom: "-5px", marginTop: "-10px" }}>
                    {crosshairValues[0].x} {crosshairValues[0].xUnit}
                  </h2>
                  {crosshairValues
                    .sort((a, b) => (b.y > a.y ? 1 : -1))
                    .map((el, i) => (
                      <div className={"body"}>
                        <table>
                          <tbody>
                            <tr>
                              {el.img ? (
                                <td>
                                  <Img src={el.img} />
                                </td>
                              ) : null}
                              <td>
                                <h3
                                  style={{
                                    marginLeft: `${i * 0}px`,
                                    display: "inline-flex",
                                  }}
                                >
                                  {el.series}: {el.y.toFixed(props.decimal)}
                                </h3>{" "}
                                <p style={{ display: "inline-flex" }}>
                                  {el.yUnit}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
                </Tooltip>
              </Crosshair>
            ) : null}
            {props.showGridLines ? (
              <VerticalGridLines style={props.verticalGridLineStyle} />
            ) : null}
            {props.showGridLines ? (
              <HorizontalGridLines style={props.horizontalGridLineStyle} />
            ) : null}
          </XYPlot>
        )}
      </AutoSizer>
      {props.lineSeries &&
      props.lineSeries.length > 0 &&
      props.data &&
      Object.values(props.data)[0] ? (
        <h3 style={{ position: "absolute", right: 0, bottom: -75 }}>
          {Object.values(props.data)[0].xAxis}
        </h3>
      ) : null}
      {!props.lineSeries || props.lineSeries.length <= 0 ? (
        <NoneSelected>
          <h1>No series selected</h1>
        </NoneSelected>
      ) : null}
    </div>
  );
};

class CustomLineChart extends React.Component {
  state = {
    locked: false,
    crosshairValue: null,
    data: this.props.data,
  };

  componentDidMount() {
    const tempState = this.state;
    Object.values(tempState.data).map((obj) => {
      obj.visible = true;
    });
    this.setState(tempState);
  }

  render() {
    const marginOffset = 20;
    return (
      <Transition trans={this.props.trans}>
        <LineChart>
          <table width={"100%"}>
            <tbody>
              <tr>
                {!this.props.hideSeriesSelection ? (
                  <td>
                    <div
                      style={{
                        marginLeft: `-${marginOffset}px`,
                        marginRight: `${marginOffset * 2}px`,
                      }}
                    >
                      <_SeriesSelection_
                        theme={this.props.theme}
                        data={this.state.data}
                        cb={(el) => {
                          this.state.data[el].visible = !this.state.data[el]
                            .visible;
                          this.setState({
                            crosshairValue: this.state.crosshairValue,
                            locked: this.state.locked,
                            data: this.state.data,
                          });
                        }}
                      />
                    </div>
                  </td>
                ) : null}
                <td width={"85%"} align={"left"}>
                  {this.state.data ? (
                    <Lines
                      theme={this.props.theme}
                      decimal={this.props.decimal}
                      setCrosshairValue={(crosshairValue) =>
                        this.setState({
                          crosshairValue,
                          locked: this.state.locked,
                          data: this.state.data,
                        })
                      }
                      setLocked={(locked) =>
                        this.setState({
                          crosshairValue: this.state.crosshairValue,
                          locked,
                          data: this.state.data,
                        })
                      }
                      locked={this.state.locked}
                      crosshairValue={this.state.crosshairValue}
                      data={this.state.data}
                      showAxis={this.props.showAxis}
                      showGridLines={this.props.showGridLines}
                      height={this.props.height}
                      verticalGridLineStyle={{ opacity: 0 }}
                      horizontalGridLineStyle={{ opacity: 0.15 }}
                      lineSeries={(() => {
                        const _series_ = Object.values(this.state.data);
                        let series = _series_.map((series, i) => (
                          <LineMarkSeries
                            curve={"curveMonotoneX"}
                            opacity={1}
                            color={
                              theme[this.props.theme].lineSeries[
                                i % theme[this.props.theme].lineSeries.length
                              ]
                            }
                            onNearestX={(value, { index }) =>
                              !this.state.locked
                                ? this.setState({
                                    crosshairValue: { value, index },
                                    locked: this.state.locked,
                                    data: this.state.data,
                                  })
                                : null
                            }
                            data={series.data}
                            animation={"wobbly"}
                            fill={"transparent"}
                            stroke={0}
                          />
                        ));
                        return series.filter((el, i) =>
                          _series_[i].visible ? el : null
                        );
                      })()}
                    />
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
          <_DataTable_
            theme={theme[this.props.theme].complement}
            crosshairValue={this.state.crosshairValue}
            data={this.state.data}
            decimal={this.props.decimal}
            dataTableColumns={this.props.dataTableColumns}
          />
        </LineChart>
      </Transition>
    );
  }
}

export default CustomLineChart;
