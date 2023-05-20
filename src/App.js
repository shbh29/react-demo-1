import React from 'react';
import './App.css';

class HelloWorld extends React.Component {
  render () {
    const {value} = this.props;
    return <h1> Hello, {value}</h1>;
  }
}

export { HelloWorld };
