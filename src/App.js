import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import setupStore from "./store";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ThankYouPage from "./pages/ThankYouPage";

import "./App.scss";

const App = () => {
  return (
    <Provider store={setupStore()}>
      <BrowserRouter>
        <Switch>
          <Route path="/product/:id">
            <ProductDetailPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <ProtectedRoute path="/thank-you-page">
            <ThankYouPage />
          </ProtectedRoute>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
