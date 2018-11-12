import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Landing from "./landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/menu" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
