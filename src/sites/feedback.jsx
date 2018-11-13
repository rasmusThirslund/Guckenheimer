import React, {Component, Fragment} from "react";
import TopMenu from "../components/renderings/topmenu";
import SectionWrapper from "../components/layout/sectionWrapper";
import SingleWrapper from "../components/layout/singleWrapper";
import Article from "../components/renderings/article";
import styles from "./feedback.scss";
import Heading from "../components/renderings/heading";
import RadioButton from "../components/renderings/radiobutton";

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        quality: "",
        selection: "",
        quantity: "",
        value: "",
        safety: ""
      }
    };
  }

  isValid() {
    for (const prop in this.state.form) {
      if (this.state.form.hasOwnProperty(prop)) {
        if (this.state.form[prop] === "") {
          return false;
        }
      }
    }

    return true;
  }

  submit(ev) {
    ev.preventDefault();
    let text = "You didn't answer all questions :)";

    if (this.isValid()) {
      text = `You submitted the following answers:
      Quality: ${this.state.form.quality}
      Selection: ${this.state.form.selection}
      Quantity: ${this.state.form.quantity}
      Value: ${this.state.form.value}
      Safety: ${this.state.form.safety}
      `;
    }

    alert(text);
  }

  answerList() {
    return ["Excellent", "Above average", "Average", "Below Average", "Bad"];
  }

  setAnswerFor(questionId, answerIndex) {
    const form = this.state.form;
    form[questionId] = this.answerList()[answerIndex];
    this.setState({ form });
  }

  renderAnswersFor(questionId) {
    return this.answerList().map((text, index) => {
      return (
        <RadioButton
          id={`${questionId}-${index}`}
          text={text}
          name={questionId}
          key={index}
          onClick={() => this.setAnswerFor(questionId, index)}
        />
      );
    });
  }

  render() {
    return (
      <Fragment>
        <TopMenu hideNavigation back />
        <SectionWrapper grey>
          <SingleWrapper className={styles["header-spacing"]}>
            <strong>FEEDBACK</strong>
          </SingleWrapper>
        </SectionWrapper>
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
          <SingleWrapper className={styles["form-spacing"]}>
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
                {this.renderAnswersFor("quality")}
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
                {this.renderAnswersFor("selection")}
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
                {this.renderAnswersFor("quantity")}
              </div>
              <br /> <br />
              <div>
                <Heading h6>
                  How did you experience the <strong>value</strong> of the food?
                </Heading>
              </div>
              <br />
              <div className={styles["button-group"]}>
                {this.renderAnswersFor("value")}
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
                {this.renderAnswersFor("safety")}
              </div>
              <br />
              <button
                type="submit"
                className={styles.submit}
                onClick={ev => this.submit(ev)}
              >
                Submit
              </button>
            </form>
          </SingleWrapper>
        </SectionWrapper>
      </Fragment>
    );
  }
}

export default Feedback;
