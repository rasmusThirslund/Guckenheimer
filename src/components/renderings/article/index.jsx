import React, { Component, Fragment } from "react";
import Heading from "../heading";
import styles from "./article.scss";

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, body } = this.props;

    return (
      <Fragment>
        <Heading h1 className={styles.color}>
          {title}
        </Heading>
        <br />
        <p className={styles.color}>{body}</p>
      </Fragment>
    );
  }
}

export default Article;
