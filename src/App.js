import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import ProtectedRoute from "./components/ProtectedRoute";

import setupStore from "./store";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ThankYouPage from "./pages/ThankYouPage";
import CartPage from "./pages/CartPage";

import "./App.scss";

const { store, persistor } = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
            <ProtectedRoute path="/cart">
              <CartPage />
            </ProtectedRoute>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
