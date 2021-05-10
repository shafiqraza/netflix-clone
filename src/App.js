import React from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import routes from "./constants/routes";

import Home from "./pages/home/home.component";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.HOME} component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
