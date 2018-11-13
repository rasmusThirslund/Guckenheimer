import React, { Component } from "react";
import styles from "./banner.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

let cx = classNames.bind(styles);

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bannerClass = cx(this.props.type, {
      banner: true,
      bannerDark: this.props.dark,
      bannerImage: this.props.hasImage
    });

    const href = this.props.href || "#";

    return (
      <section className={bannerClass}>
        <div
          className={styles.bannerBackground}
          style={this.props.bannerBgStyle}
        />

        <Link to={href} className={styles.bannerLink}>
          <div className={styles.bannerCategory}>{this.props.category}</div>
          <h1 className={styles.bannerHeader}>{this.props.header}</h1>
          <div className={styles.bannerSubLine}>{this.props.subHeader}</div>
          <div className={styles.bannerButton}>{this.props.buttonText}</div>
        </Link>
      </section>
    );
  }
}

export default Banner;
