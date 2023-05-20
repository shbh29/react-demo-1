import React from "react";
import ReactDOM from "react-dom";
import { HelloWorld } from './App';

const rootEl = document.getElementById('root');


ReactDOM.render(<HelloWorld name="Shubham" value={42} />, rootEl);