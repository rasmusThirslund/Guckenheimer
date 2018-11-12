import React, { Component, Fragment } from "react";
import TopMenu from "../components/landing/topmenu/topmenu";
import TileContainer from "../components/landing/tilecontainer/tilecontainer";
import BackgroundImage from "../components/landing/backgroundImage/backgroundImage";

class Landing extends Component {
  render() {
    const diners = [
      { name: "Covington" },
      { name: "Bannockburn" },
      { name: "LA" },
      { name: "Thousand Oaks" },
      { name: "Exton" },
      { name: "Cafe 300" },
      { name: "Atas Café" },
      { name: "Brave Bar" },
      { name: "95 Hayden Cafe" },
      { name: "Barista 55 Hayden" },
      { name: "Barista 1445" }
    ];

    return (
      <Fragment>
        <TopMenu />
        <TileContainer diners={diners} />
        <BackgroundImage />
      </Fragment>
    );
  }
}

export default Landing;
