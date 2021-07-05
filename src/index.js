import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

// import { MyContextProvider } from './contexts/MyContext'

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.querySelector("#root")
);