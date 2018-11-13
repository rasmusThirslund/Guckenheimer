import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Landing from "./sites/landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feedback from "./sites/feedback";
import NutrionPage from './components/renderings/nutrionpage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/menu" component={App} />
      <Route exact path="/nutrition" component={NutrionPage} />
      <Route path="/feedback" component={Feedback} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
