import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

import setupStore from "./store";

import "./App.scss";

const HomePage = lazy(() => import("./pages/HomePage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));
const CartPage = lazy(() => import("./pages/CartPage"));

const { store, persistor } = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
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
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
