import React, { Component } from "react";
import "./Stats.css";

class Stats extends Component {
  static defaultProps = {
    ntotal: 0,
    nheads: 0
  };

  render() {
    let ntails = this.props.ntotal - this.props.nheads;
    return (
      <p>
        Out of {this.props.ntotal} flips, there have been {this.props.nheads}{" "}
        heads and {ntails} tails!
      </p>
    );
  }
}

export default Stats;
