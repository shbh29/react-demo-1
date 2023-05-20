import React from 'react';
import './App.css';


function HelloWorld(props) {
  const { name } = props;
  return <h1> Hello, {name}! </h1>;
}


export { HelloWorld };
