import React, { Component } from "react";
import styles from "./singleWrapper.scss";
import classnames from "classnames";

class SingleWrapper extends Component {
  render() {
    return (
      <div className={classnames(this.props.className, styles.singleWrapper)}>
        {this.props.children}
      </div>
    );
  }
}

export default SingleWrapper;
