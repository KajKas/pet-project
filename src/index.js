import React from "react";
import ReactDOM from 'react-dom'
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from './redux/store'

const render = () => {
  fancyLog()
  return ReactDOM.render(
    <App store={store} />,
    document.getElementById("root")
  )
}

function fancyLog() {
  console.log("%c Rendered with 👉 👉 👇 ", "background: purple; color: #FFF");
  console.log(store.getState());
}

render()
store.subscribe(render)
