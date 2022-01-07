/* eslint-disable react/prop-types */
import React from 'react';

import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { errorInfo, error } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      return (
        <div className="error-boundary">
          <h2 className="error-boundary__title">
            Sorry. Something went wrong :(
          </h2>
          <div className="error-boundary__details">
            <p>
              {error && <strong>{error.toString()}</strong>}
              <br />
              {errorInfo.componentStack}
            </p>
          </div>
        </div>
      );
    }
    return children;
  }
}

export { ErrorBoundary };
