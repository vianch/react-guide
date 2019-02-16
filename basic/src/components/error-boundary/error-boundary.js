import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1>ERROR HANDLER: {this.state.errorMessage} </h1>;
    } else {
      return this.props.children;
    }
  }
}
