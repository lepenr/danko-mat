import React, { Component } from "react";
import "../App.css";

class InputText extends Component {
  //state = {  }
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };
  incrementNumber = () => {
    console.log("value", this.state.count.value);
    this.setState({ count: document.getElementById("exampleTextarea") });
  };
  render() {
    console.log("prosp", this.props);
    return (
      <div className="textInput form-rounded">
        <textarea
          className="form-control"
          id="exampleTextarea"
          rows="3"
          placeholder="Text"
        />
        <div>
          <button
            id="generate-button"
            type="button"
            className="btn btn-light btn-cust"
            onClick={this.incrementNumber}
          >
            Generuj!
          </button>

          <button type="button" className="btn btn-light btn-cust">
            Generuj text!
          </button>
        </div>
      </div>
    );
  }
}

export default InputText;
