import React from "react";
import "./styles.css";

export default class Border extends React.Component {
  createVideo(ref, data) {
    return (
      <video
        ref={ref}
        onMouseEnter={() => this.refs[ref].play()}
        onMouseLeave={() => this.refs[ref].pause()}
        muted
        preload="auto"
        loop
      >
        <source src={this.props.data.src} type={this.props.data.type} />
      </video>
    );
  }

  render() {
    return (
      <div className={"base"}>
        <div className={this.props.style}>
          {this.createVideo("video1", this.props.data)}
          <div className={`cnt${this.props.pos ? `-${this.props.pos}` : ""}`}>
            {this.props.data.cnt}
          </div>
        </div>
      </div>
    );
  }
}
