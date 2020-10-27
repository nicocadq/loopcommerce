import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, ...leftoverProps }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Route
      render={({ location }) =>
        user ? (
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
