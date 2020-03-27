import React, { Component } from "react";
import CustomModal from "react-awesome-modal";
import FontAwesomeIcon from "../font_awesome_icon/font_awesome_icon";
import Styles from "./styles";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "standard"
    };
  }

  closeModal() {
    this.props.close();
  }

  componentDidMount() {
    const style = Styles[this.props.style];
    const resize = () =>
      this.setState({
        size: window.innerWidth > 800 ? "standard" : "mobile"
      });
    window.addEventListener("resize", () => resize());
    resize();
  }

  size() {
    switch (this.props.style) {
      case "a":
        return this.state.size === "standard"
          ? {
              width: "50%",
              height: "75%"
            }
          : {
              width: "95%",
              height: "75%"
            };
    }
  }

  render() {
    return (
      <CustomModal
        visible={this.props.visible}
        width={this.size().width}
        height={this.size().height}
        effect={this.props.animation}
        onClickAway={() => this.closeModal()}
      >
        <div className={"modal"}>
          <div className={"header"}>
            <div className={"cancel"} onClick={() => this.closeModal()}>
              <FontAwesomeIcon
                style={"a"}
                color={"gray-black"}
                data={{ img: "window-close", size: "25px" }}
              />
            </div>
            <div className={"content"}>{this.props.header}</div>
          </div>
          <div className={"body"}>
            <div className={"content"}>
              <div className={"position"}>{this.props.content}</div>
            </div>
          </div>
        </div>
      </CustomModal>
    );
  }
}
