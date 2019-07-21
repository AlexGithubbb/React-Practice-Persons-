import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMesg: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMesg: error})
  }
  render() {
    if (this.state.hasError) {
    return <h1>{this.state.errorMesg}</h1>
    }else{
    return this.props.children;
    }
  }
}

export default ErrorBoundary;
