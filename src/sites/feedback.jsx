import React, { Component, Fragment } from "react";
import TopMenu from "../components/renderings/topmenu";

class Feedback extends Component {
  render() {
    return (
      <Fragment>
        <TopMenu hideNavigation back />
        <h1>Feedback</h1>
      </Fragment>
    );
  }
}

export default Feedback;
