import React, {Component, Fragment} from "react";
import SectionWrapper from "../../layout/sectionWrapper";
import SingleWrapper from "../../layout/singleWrapper";
import styles from "./nutritionpage.scss";

class Three extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <SectionWrapper walled>
          <div className={styles.player}>
            <iframe
              src="https://www.youtube.com/embed/bpHFZ0JhGYc?start=7"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/*<video src="https://youtu.be/bpHFZ0JhGYc?t=7&html5=True"></video>*/}
        </SectionWrapper>

        <SectionWrapper>
          <SingleWrapper>
            <div className={styles.genericContent}>
              <p className={styles.trumpet}>Nutrition</p>

              <h1 className={styles.heading}>
                Own every day with food beyond basic nutrition
              </h1>

              <p className={styles.lead}>
                At Guckenheimer we understand the power of food and its role in
                helping you thrive.
              </p>

              <div className={styles.copy}>
                <p>
                  Bacon ipsum dolor amet porchetta turducken sirloin frankfurter
                  shoulder jerky. Swine prosciutto doner flank, brisket biltong
                  chicken cow short loin meatloaf turkey pancetta picanha rump
                  salami. Beef ribs shoulder cow doner, biltong cupim fatback
                  pig tri-tip filet mignon leberkas pork belly kielbasa shankle
                  strip steak. Andouille bacon rump frankfurter beef ribs
                  venison pig brisket short loin. Brisket andouille shankle
                  porchetta ham, prosciutto jerky turkey shoulder. Flank beef
                  ribs jowl, chicken ham burgdoggen pig salami tri-tip.
                </p>
                <p>
                  Gumbo beet greens corn soko endive gumbo gourd. Parsley
                  shallot courgette tatsoi pea sprouts fava bean collard greens
                  dandelion okra wakame tomato. Dandelion cucumber earthnut pea
                  peanut soko zucchini.
                </p>
                <p>
                  Turnip greens yarrow ricebean rutabaga endive cauliflower sea
                  lettuce kohlrabi amaranth water spinach avocado daikon napa
                  cabbage asparagus winter purslane kale. Celery potato scallion
                  desert raisin horseradish spinach carrot soko. Lotus root
                  water spinach fennel kombu maize bamboo shoot green bean swiss
                  chard seakale pumpkin onion chickpea gram corn pea. Brussels
                  sprout coriander water chestnut gourd swiss chard wakame
                  kohlrabi beetroot carrot watercress. Corn amaranth salsify
                  bunya nuts nori azuki bean chickweed potato bell pepper
                  artichoke.
                </p>
                <p>
                  Marzipan sugar plum toffee pudding macaroon. Cake sweet roll
                  liquorice bear claw topping halvah marshmallow. Cake topping
                  jujubes. Croissant pudding wafer soufflé caramels carrot cake
                  biscuit cake candy canes. Cotton candy croissant sesame snaps
                  cotton candy soufflé cotton candy muffin sesame snaps bonbon.
                  Sugar plum ice cream biscuit jujubes macaroon candy topping
                  caramels. Caramels topping danish. Donut candy oat cake cookie
                  icing. Candy cake marshmallow chocolate bar cookie cookie.
                  Sweet bonbon pastry sesame snaps tiramisu soufflé apple pie.
                  Croissant dragée jelly beans gummies caramels. Apple pie
                  jelly-o wafer. Cake chocolate bar dragée cotton candy lollipop
                  dragée sweet roll bear claw.
                </p>
              </div>
            </div>
          </SingleWrapper>
        </SectionWrapper>
      </Fragment>
    );
  }
}

export default Three;
