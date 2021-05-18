import React from "react";
import { Ferma } from "./Ferma/Ferma";
import { GlobalStyles } from "./global.styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./constants";

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path={routes.base} component={Ferma} />
      </Switch>
    </Router>
  );
};
