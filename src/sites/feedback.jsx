import React, { Component, Fragment } from "react";
import TopMenu from "../components/renderings/topmenu";
import SectionWrapper from "../components/layout/sectionWrapper";
import SingleWrapper from "../components/layout/singleWrapper";
import Article from "../components/renderings/article";

class Feedback extends Component {
  render() {
    return (
      <Fragment>
        <TopMenu hideNavigation back />
        <SectionWrapper>
          <SingleWrapper>
            <Article
              title="We'd love to hear your opinion and ideas"
              body="We always strive to be better lorem ipsum dolor consecteteur eud
              sit amet lorem ipsum dolor consecteteur eud sit amet."
            />
          </SingleWrapper>
        </SectionWrapper>
      </Fragment>
    );
  }
}

export default Feedback;
