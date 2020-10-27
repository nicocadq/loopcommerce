import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

import setupStore from "../store";

const renderWithProviders = (ui, { initialState, history = [] } = {}) => {
  const store = setupStore(initialState);
  const historyData = history.length
    ? createMemoryHistory({ initialEntries: history })
    : createMemoryHistory();

  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={historyData}>{children}</Router>
    </Provider>
  );

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return { ...render(ui, { wrapper: Wrapper }), store, history: historyData };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithProviders as render };
