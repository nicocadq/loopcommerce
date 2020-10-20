import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, ...leftOverProps }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) return <Redirect to="/login" />;

  return <Route {...leftOverProps}>{children}</Route>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
