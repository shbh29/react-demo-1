import React from 'react';
import './App.css';

class Welcome extends React.Component {
  render () {
    const {value} = this.props;
    return (
      <>
        <h1> Hello, {value}</h1>
        <button onClick={function() { console.log(`button was clicked! ${value}`)}}>Click</button>
      </>
    )
    
  }
}

export { Welcome };
