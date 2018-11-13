import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Landing from "./sites/landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feedback from "./sites/feedback";
import NutritionPage from "./components/renderings/nutritionpage";
import NutritionPage2 from "./components/renderings/nutritionpage2";
import NutritionPage3 from "./components/renderings/nutritionpage3";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/menu" component={App} />
      <Route exact path="/nutrition" component={NutritionPage} />
      <Route exact path="/nutrition2" component={NutritionPage2} />
      <Route exact path="/nutrition3" component={NutritionPage3} />
      <Route exact path="/feedback" component={Feedback} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
