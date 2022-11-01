
import React, { Component } from "react";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert("This is an alert");
  }

  render() {
    return (
      <div className="App">
        <Footer handleClick={this.handleClick} />
      </div>
    );
  }
}
export default App;