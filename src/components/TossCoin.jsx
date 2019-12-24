import React, { Component } from "react";
import "./TossCoin.css";

import Stats from "./Stats";

class TossCoin extends Component {
  constructor(props) {
    super(props);
    this.state = { ntotal: 0, nheads: 0, outcome: null };
    this.handleToss = this.handleToss.bind(this);
  }

  handleToss() {
    //head =1, and tail = 0
    let rn = Math.random() > 0.5 ? 1 : 0;
    this.setState({
      ntotal: this.state.ntotal + 1,
      nheads: this.state.nheads + rn,
      outcome: rn
    });
  }

  render() {
    let out = this.state.outcome === 1 ? "heads" : "tails";
    let imUrl = "https://tinyurl.com/react-coin-" + out + "-jpg";
    console.log(imUrl);
    return (
      <div>
        <h2 style={{ alignContent: "center" }}>Let's flip a coin</h2>

        {this.state.ntotal == 0 ? (
          ""
        ) : (
          <img src={imUrl} width="150px" height="150px" />
        )}
        <br />
        <button onClick={this.handleToss}>Flip Mee!</button>
        <Stats ntotal={this.state.ntotal} nheads={this.state.nheads} />
      </div>
    );
  }
}

export default TossCoin;
