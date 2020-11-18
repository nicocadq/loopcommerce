import React from "react";
import PropTypes from "prop-types";

import styles from "./ErrorBoundary.module.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: {},
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    const {
      hasError,
      error: { message },
    } = this.state;
    const { children } = this.props;
    const isDevelopmentMode = process.env.NODE_ENV === "development";

    if (hasError)
      return (
        <div className={styles.container}>
          <p className={styles.message}>
            There was an unexpected error, please reload
          </p>
          {isDevelopmentMode && <p className={styles.error}>{message}</p>}
        </div>
      );

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
