import React, {Component, Fragment} from "react";
import TopMenu from "../topmenu";
import SectionWrapper from "../../layout/sectionWrapper";
import SingleWrapper from "../../layout/singleWrapper";
import Footer from "../footer";
import styles from "../nutritionpage/nutritionpage.scss";
import classNames from "classnames/bind";
import {Route} from "react-router-dom";

let cx = classNames.bind(styles);

class NutritionPage2 extends Component {
  constructor(props) {
    super(props);
  }

  _selectHandler(event, history) {
    const value = event.target.value;

    if (value) {
      history.push("/" + value);
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
                  render={({ history }) => (
                    <select onChange={ev => this._selectHandler(ev, history)}>
                      <option value={null}>Select food type</option>
                      <option value="nutrition">Type 1</option>
                      <option value="nutrition2">Type 2</option>
                      <option value="nutrition3">Type 3</option>
                    </select>
                  )}
                />
              </div>
            </div>
          </SingleWrapper>
        </SectionWrapper>

        <SectionWrapper>
          <SingleWrapper>
            <div className={styles.genericContent}>
              <p className={styles.trumpet}>Nutrition</p>

              <h1 className={styles.heading}>Pasta and sandwiches</h1>

              <p className={styles.lead}>
                At Guckenheimer we understand the power of food and its role in
                helping you thrive.
              </p>

              <div className={cx(styles.copy, styles.scrollY)}>
                <table className={styles.table}>
                  <tbody>
                    <tr>
                      <th />
                      <th>Header 2</th>
                      <th>Header </th>
                      <th>Header </th>
                      <th>Header </th>
                    </tr>
                    <tr>
                      <td>Row:1 Cell:1</td>
                      <td>Row:1 Cell:2</td>
                      <td>Row:1 Cell:3</td>
                      <td>Row:1 Cell:4</td>
                      <td>Row:1 Cell:5</td>
                    </tr>
                    <tr>
                      <td>Row:2 Cell:1</td>
                      <td>Row:2 Cell:2</td>
                      <td>Row:2 Cell:3</td>
                      <td>Row:2 Cell:4</td>
                      <td>Row:2 Cell:5</td>
                    </tr>
                    <tr>
                      <td>Row:3 Cell:1</td>
                      <td>Row:3 Cell:2</td>
                      <td>Row:3 Cell:3</td>
                      <td>Row:3 Cell:4</td>
                      <td>Row:3 Cell:5</td>
                    </tr>
                    <tr>
                      <td>Row:4 Cell:1</td>
                      <td>Row:4 Cell:2</td>
                      <td>Row:4 Cell:3</td>
                      <td>Row:4 Cell:4</td>
                      <td>Row:4 Cell:5</td>
                    </tr>
                    <tr>
                      <td>Row:5 Cell:1</td>
                      <td>Row:5 Cell:2</td>
                      <td>Row:5 Cell:3</td>
                      <td>Row:5 Cell:4</td>
                      <td>Row:5 Cell:5</td>
                    </tr>
                    <tr>
                      <td>Row:6 Cell:1</td>
                      <td>Row:6 Cell:2</td>
                      <td>Row:6 Cell:3</td>
                      <td>Row:6 Cell:4</td>
                      <td>Row:6 Cell:5</td>
                    </tr>
                  </tbody>
                </table>
                <br /> <br />
                <table className={styles.table}>
                  <tbody>
                    <tr>
                      <th />
                      <th>Header 2</th>
                      <th>Header </th>
                      <th>Header </th>
                      <th>Header </th>
                    </tr>
                    <tr>
                      <td>Row:1 Cell:1</td>
                      <td>Row:1 Cell:2</td>
                      <td>Row:1 Cell:3</td>
                      <td>Row:1 Cell:4</td>
                      <td>Row:1 Cell:5</td>
                    </tr>
                    <tr>
                      <td>Row:2 Cell:1</td>
                      <td>Row:2 Cell:2</td>
                      <td>Row:2 Cell:3</td>
                      <td>Row:2 Cell:4</td>
                      <td>Row:2 Cell:5</td>
                    </tr>
                    <tr>
                      <td>Row:3 Cell:1</td>
                      <td>Row:3 Cell:2</td>
                      <td>Row:3 Cell:3</td>
                      <td>Row:3 Cell:4</td>
                      <td>Row:3 Cell:5</td>
                    </tr>
                    <tr>
                      <td>Row:4 Cell:1</td>
                      <td>Row:4 Cell:2</td>
                      <td>Row:4 Cell:3</td>
                      <td>Row:4 Cell:4</td>
                      <td>Row:4 Cell:5</td>
                    </tr>
                    <tr>
                      <td>Row:5 Cell:1</td>
                      <td>Row:5 Cell:2</td>
                      <td>Row:5 Cell:3</td>
                      <td>Row:5 Cell:4</td>
                      <td>Row:5 Cell:5</td>
                    </tr>
                    <tr>
                      <td>Row:6 Cell:1</td>
                      <td>Row:6 Cell:2</td>
                      <td>Row:6 Cell:3</td>
                      <td>Row:6 Cell:4</td>
                      <td>Row:6 Cell:5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </SingleWrapper>
        </SectionWrapper>

        <Footer />
      </Fragment>
    );
  }
}

export default NutritionPage2;
