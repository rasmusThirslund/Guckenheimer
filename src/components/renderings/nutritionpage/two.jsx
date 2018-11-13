import React, {Component, Fragment} from "react";
import SectionWrapper from "../../layout/sectionWrapper";
import SingleWrapper from "../../layout/singleWrapper";
import styles from "./nutritionpage.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Two extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default Two;
