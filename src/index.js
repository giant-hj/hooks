import React, { useState } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput";

import "./styles.css";

const App = () => {
  const maxLangth = value => !value.includes("@");
  const name = useInput("Mr.", maxLangth);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name.props} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
