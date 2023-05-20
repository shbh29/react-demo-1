import React from 'react';
import './App.css';

class Welcome extends React.Component {
  render () {
    const {value} = this.props;
    return <h1> Hello, {value}</h1>;
  }
}

export { Welcome };
