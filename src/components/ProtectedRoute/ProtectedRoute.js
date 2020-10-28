import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

import { useAuth } from "../../hooks";

const ProtectedRoute = ({ children, ...leftoverProps }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      render={({ location }) =>
        isAuthenticated ? (
          <>{children}</>
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
      {...leftoverProps}
    />
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
