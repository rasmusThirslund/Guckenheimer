import React, { Component, Fragment } from "react";
import TopMenu from "../components/renderings/topmenu";
import SectionWrapper from "../components/layout/sectionWrapper";
import SingleWrapper from "../components/layout/singleWrapper";
import Article from "../components/renderings/article";
import styles from "./feedback.scss";
import Heading from "../components/renderings/heading";
import RadioButton from "../components/renderings/radiobutton";

class Feedback extends Component {
  render() {
    return (
      <Fragment>
        <TopMenu hideNavigation back />
        <SectionWrapper>
          <SingleWrapper className={styles["article-spacing"]}>
            <Article
              title="We'd love to hear your opinion and ideas"
              body="We always strive to be better lorem ipsum dolor consecteteur eud
              sit amet lorem ipsum dolor consecteteur eud sit amet."
            />
          </SingleWrapper>
        </SectionWrapper>
        <SectionWrapper>
          <SingleWrapper>
            <Heading h5>1. Food</Heading>
            <br />
            <form action="#">
              <div>
                <Heading h6>
                  How did you experience the <strong>quality</strong> of the
                  food?
                </Heading>
              </div>
              <br />
              <div className={styles["button-group"]}>
                <RadioButton id="quality-one" text="Excellent" name="quality" />
                <RadioButton
                  id="quality-two"
                  text="Above average"
                  name="quality"
                />
                <RadioButton id="quality-three" text="Average" name="quality" />
                <RadioButton
                  id="quality-four"
                  text="Below Average"
                  name="quality"
                />
                <RadioButton id="quality-five" text="Bad" name="quality" />
              </div>
              <br /> <br />
              <div>
                <Heading h6>
                  How did you experience the <strong>selection</strong> of the
                  food?
                </Heading>
              </div>
              <br />
              <div className={styles["button-group"]}>
                <RadioButton
                  id="selection-one"
                  text="Excellent"
                  name="selection"
                />
                <RadioButton
                  id="selection-two"
                  text="Above average"
                  name="selection"
                />
                <RadioButton
                  id="selection-three"
                  text="Average"
                  name="selection"
                />
                <RadioButton
                  id="selection-four"
                  text="Below Average"
                  name="selection"
                />
                <RadioButton id="selection-five" text="Bad" name="selection" />
              </div>
              <br /> <br />
              <div>
                <Heading h6>
                  How did you experience the <strong>quantity</strong> of the
                  food?
                </Heading>
              </div>
              <br />
              <div className={styles["button-group"]}>
                <RadioButton
                  id="quantity-one"
                  text="Excellent"
                  name="quantity"
                />
                <RadioButton
                  id="quantity-two"
                  text="Above average"
                  name="quantity"
                />
                <RadioButton
                  id="quantity-three"
                  text="Average"
                  name="quantity"
                />
                <RadioButton
                  id="quantity-four"
                  text="Below Average"
                  name="quantity"
                />
                <RadioButton id="quantity-five" text="Bad" name="quantity" />
              </div>
              <br /> <br />
              <div>
                <Heading h6>
                  How did you experience the <strong>value</strong> of the food?
                </Heading>
              </div>
              <br />
              <div className={styles["button-group"]}>
                <RadioButton id="value-one" text="Excellent" name="value" />
                <RadioButton id="value-two" text="Above average" name="value" />
                <RadioButton id="value-three" text="Average" name="value" />
                <RadioButton
                  id="value-four"
                  text="Below Average"
                  name="value"
                />
                <RadioButton id="value-five" text="Bad" name="value" />
              </div>
              <br /> <br />
              <div>
                <Heading h6>
                  How did you experience the <strong>safety</strong> of the
                  food?
                </Heading>
              </div>
              <br />
              <div className={styles["button-group"]}>
                <RadioButton id="safety-one" text="Excellent" name="safety" />
                <RadioButton
                  id="safety-two"
                  text="Above average"
                  name="safety"
                />
                <RadioButton id="safety-three" text="Average" name="safety" />
                <RadioButton
                  id="safety-four"
                  text="Below Average"
                  name="safety"
                />
                <RadioButton id="safety-five" text="Bad" name="safety" />
              </div>
            </form>
          </SingleWrapper>
        </SectionWrapper>
      </Fragment>
    );
  }
}

export default Feedback;
