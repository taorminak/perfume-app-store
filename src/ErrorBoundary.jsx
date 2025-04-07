import React, { Component } from 'react';

const ErrorBoundary = class extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops. Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children;
  }
};

export default ErrorBoundary;
