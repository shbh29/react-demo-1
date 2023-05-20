import React from "react";
import ReactDOM from "react-dom";
import { Welcome } from './App';

const rootEl = document.getElementById('root');

let app = (
<>
  <Welcome value='Shubham' />
  <Welcome value='Akash' />
  <Welcome value='Tejas!' />
</>
)

console.log(app);
 
ReactDOM.render(app, rootEl);