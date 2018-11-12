import React, { Component, Fragment } from "react";
import TopMenu from "./components/landing/topmenu/topmenu";
import TileContainer from "./components/landing/tilecontainer/tilecontainer";
import BackgroundImage from "./components/landing/backgroundImage/backgroundImage";

class Landing extends Component {
  render() {
    const diners = [
      { name: "Shire Covington" },
      { name: "Shire Bannockburn" },
      { name: "Shire LA" },
      { name: "Shire Thousand Oaks" },
      { name: "Shire Exton" },
      { name: "Shire Cafe 300" },
      { name: "Shire Atas Café" },
      { name: "Shire Brave Bar" },
      { name: "Shire 95 Hayden Cafe" },
      { name: "Shire Barista 55 Hayden" },
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
