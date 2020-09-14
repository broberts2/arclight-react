import React from "react";
import { RadialChart, Hint } from "react-vis";
import styled from "styled-components";
import theme from "../themes";
import Zoom from "@material-ui/core/Zoom";
import { _SeriesSelection_, Img, Transition } from "../index";
import "./DoughnutChart.css";

const DoughnutChart = styled.div`
  margin: 20px;
  width: 100%;
  position: relative;
  text-align: center;
  font-size: ${(props) => props.radius / 7.5}px;
  & .name {
    font-size: ${(props) => props.radius / 10}px;
  }
  & img {
    border-radius: 50%;
    width: 75%;
  }
`;

const InnerImgBorder = styled.div`
  & img {
    border: 2px solid ${(props) => props.color};
  }
`;

const buildData = (colors, data, unit, isUniform) =>
  Object.keys(data)
    .map((key, i) => ({
      name: key,
      color: colors[i],
      value: data[key].value,
      img: data[key].img,
      angle: isUniform ? data.length / 100 : data[key].value,
      unit: data[key].unit ? data[key].unit : unit,
      visible: data[key].visible,
      className: data[key].className,
    }))
    .filter((el) => (el.visible ? el : null));

export default class _Chart_ extends React.Component {
  state = {
    data: this.props.data,
    name: null,
    value: null,
    unit: null,
    img: null,
  };

  componentDidMount() {
    const tempState = this.state;
    Object.values(tempState.data).map((obj) => {
      obj.visible = true;
      obj.className = "no-hover";
    });
    this.setState(tempState);
  }

  render() {
    return (
      <Transition trans={this.props.trans}>
        
          <table>
            <tbody>
              <tr>
                {!this.props.hideSeriesSelection ? (
                  <td>
                    <_SeriesSelection_
                      compact
                      theme={this.props.theme}
                      data={this.state.data}
                      cb={(el) => {
                        const state = this.state;
                        state.data[el].visible = !state.data[el].visible;
                        this.setState(state);
                      }}
                    />
                  </td>
                ) : null}
                <td>
                  <DoughnutChart
                    radius={this.props.radius}
                    style={{
                      width: this.props.radius * 2,
                      height: this.props.radius * 2,
                      position: "relative",
                    }}
                  >
                    <RadialChart
                      className={"DoughnutChart"}
                      data={buildData(
                        theme[this.props.theme].lineSeries,
                        this.state.data,
                        this.props.defaultUnit,
                        this.props.uniform
                      )}
                      colorType={"literal"}
                      width={this.props.radius * 2}
                      height={this.props.radius * 2}
                      animation={false}
                      innerRadius={this.props.radius - this.props.width}
                      radius={this.props.radius - 1}
                      labelsAboveChildren={true}
                      padAngle={this.props.padAngle / 50}
                      showLabels={true}
                      onValueMouseOver={(e) => {
                        const data = this.state.data;
                        data[e.name].className = "hover";
                        this.setState({
                          value: e.value,
                          unit: e.unit,
                          name: e.name,
                          img: e.img,
                          imgBorderColor: theme[this.props.theme].textColor,
                          data,
                        });
                      }}
                      onValueMouseOut={(e) => {
                        const data = this.state.data;
                        data[e.name].className = "no-hover";
                        this.setState({
                          value: null,
                          unit: null,
                          name: null,
                          img: null,
                          imgBorderColor: "transparent",
                          data,
                        });
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        "-webkit-transform": "translate(-50%, -50%)",
                        "-ms-transform": "translate(-50%, -50%)",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Zoom
                        in={this.state.value}
                        style={{
                          transitionDelay: "0ms",
                        }}
                      >
                        <div>
                          {this.state.img ? (
                            <InnerImgBorder color={this.state.imgBorderColor}>
                              <Img src={this.state.img} />
                            </InnerImgBorder>
                          ) : null}
                          {this.state.value &&
                          this.state.unit &&
                          this.state.name ? (
                            <div
                              style={{
                                color: theme[this.props.theme].textColor,
                              }}
                            >
                              <div className={"name"}>{this.state.name}</div>
                              <div>
                                {this.state.value} {this.state.unit}
                              </div>
                            </div>
                          ) : (
                            <div />
                          )}
                        </div>
                      </Zoom>
                    </div>
                  </DoughnutChart>
                </td>
              </tr>
            </tbody>
          </table>
        
      </Transition>
    );
  }
}
