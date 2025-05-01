import React, { Component } from "react";
export default class Selection extends Component {
  render() {
    const {mode, currMode, dataSet, text, src, click} = this.props;
    return (
      <button
        className={`btn ${mode == currMode && "selected"}`}
        disabled={
          Object.entries(dataSet).length === 0 || (
          dataSet &&
          dataSet[mode] &&
          Object.values(dataSet[mode]).includes("/"))
        }
        onClick = {click}
      >
        <img className="svg" src={src} /> <span>{text}</span>
      </button>
    );
  }
}
