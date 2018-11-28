import React, { Component } from "react";
import styles from "./heading.scss";
import classnames from "classnames";

class Heading extends Component {
  constructor(props) {
    super(props);
  }

  h1() {
    return (
      <h1 className={classnames(this.props.className, styles.h1)}>
        {this.props.children}
      </h1>
    );
  }

  h2() {
    return (
      <h2 className={classnames(this.props.className, styles.h2)}>
        {this.props.children}
      </h2>
    );
  }

  h3() {
    return (
      <h3 className={classnames(this.props.className, styles.h3)}>
        {this.props.children}
      </h3>
    );
  }

  h4() {
    return (
      <h4 className={classnames(this.props.className, styles.h4)}>
        {this.props.children}
      </h4>
    );
  }

  h5() {
    return (
      <h5 className={classnames(this.props.className, styles.h5)}>
        {this.props.children}
      </h5>
    );
  }

  h6() {
    return (
      <h6 className={classnames(this.props.className, styles.h6)}>
        {this.props.children}
      </h6>
    );
  }

  renderHeading() {
    const { h1, h2, h3, h4, h5, h6 } = this.props;

    return h1
      ? this.h1()
      : h2
      ? this.h2()
      : h3
      ? this.h3()
      : h4
      ? this.h4()
      : h5
      ? this.h5()
      : h6
      ? this.h6()
      : this.h1();
  }

  render() {
    return this.renderHeading();
  }
}

export default Heading;
