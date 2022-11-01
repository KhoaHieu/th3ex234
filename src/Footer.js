import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <button onClick={this.props.handleClick}>Show Alert</button>
      </footer>
    );
  }
}
export default Footer;
