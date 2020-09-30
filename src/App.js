import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
