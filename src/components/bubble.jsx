import React, { Component } from "react";
import InputText from "./inputText";

import "../Bubble.css";

class Bubble extends Component {
  state = { dusan: this.props.dusan };
  render() {
    return (
      <div className="bubble">
        <div className="speech-bubble">
          <div id="text-input" className="arrow bottom right" />
          {this.state.dusan + "sadasdas"}
        </div>
      </div>
    );
  }
}

export default Bubble;
