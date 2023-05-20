import React from "react";
import ReactDOM from "react-dom";
import { Welcome } from './App';

const rootEl = document.getElementById('root');

let app = (
<div>
  <Welcome value='Shubham' />
  <Welcome value='Akash' />
  <Welcome value='Tejas!' />
</div>

)

console.log(app);
 
ReactDOM.render(app, rootEl);