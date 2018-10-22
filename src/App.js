import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import InputText from "./components/inputText";
import Image from "./components/image";
import Bubble from "./components/bubble";

class App extends Component {
  state = {
    id: 1,
    value: 1,
    dusan2: "Vlado"
  };

  render() {
    console.log("test", this.state.value);
    console.log("test", this.state.dusan2);

    console.log("test");

    return (
      <div className="App">
        <header className="App-header">
          <Bubble dusan={"MARIA"} />
          <Image />
          <p />
          <InputText value={this.state.value} />
        </header>
      </div>
    );
  }
}

export default App;
