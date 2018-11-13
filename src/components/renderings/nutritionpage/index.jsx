import React, { Component, Fragment } from "react";
import TopMenu from "../topmenu";
import SectionWrapper from "../../layout/sectionWrapper";
import SingleWrapper from "../../layout/singleWrapper";
import Footer from "../footer";
import styles from "./nutritionpage.scss";
import classNames from "classnames/bind";
import { Route } from "react-router-dom";
import One from "./one";
import Two from "./two";
import Three from "./three";

let cx = classNames.bind(styles);

class NutritionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "one"
    };
  }

  _selectHandler(event) {
    const value = event.target.value;

    console.log(value);
    switch (value) {
      case "one":
        this.setState({ current: "one" });
        break;
      case "two":
        this.setState({ current: "two" });
        break;
      case "three":
        this.setState({ current: "three" });
        break;
      default:
        this.setState({ current: "one" });
    }
  }

  renderNutrition() {
    switch (this.state.current) {
      case "one":
        return <One />;
      case "two":
        return <Two />;
      case "three":
        return <Three />;
      default:
        return <One />;
    }
  }

  render() {
    return (
      <Fragment>
        <TopMenu hideNavigation back />

        <SectionWrapper flush="bottom" grey className={styles.selectorWrapper}>
          <SingleWrapper>
            <div className={styles.cols}>
              <h2 className={styles.navHeader}>Nutrion Fact</h2>
              <div className={styles.select}>
                <Route
                  render={({ history, match }) => (
                    <select
                      onChange={ev => this._selectHandler(ev, history, match)}
                      value={this.state.current}
                    >
                      <option value={null}>Select food type</option>
                      <option value="one">Type 1</option>
                      <option value="two">Type 2</option>
                      <option value="three">Type 3</option>
                    </select>
                  )}
                />
              </div>
            </div>
          </SingleWrapper>
        </SectionWrapper>

        {this.renderNutrition()}

        <Footer />
      </Fragment>
    );
  }
}

export default NutritionPage;
