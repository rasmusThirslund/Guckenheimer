import React, {Component} from 'react';
import styles from './tilecontainer.scss'
import {Link} from "react-router-dom"

class TileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const diners = this.props.diners;

    return (
      <div className={styles.container}>
        <h1 className={styles["text-header"]}>
          <strong>Please select a Dining Service</strong>
        </h1>
        <section className={styles["tile-wrapper"]}>
          {diners.map( (diner, index) =>
            <Link to="/menu" className={styles["tile-link"]} key={index}>
              {diner.name}
            </Link>
          )}
        </section>
      </div>
    );
  }
}

export default TileContainer;
