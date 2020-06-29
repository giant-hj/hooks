import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput";
import useTabs from "./useTabs";

import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

const App = () => {
  const titleUpdater = useTitle("Loading...");
  //setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  )
}

/*
const App = () => {
  const sayHello = () => { console.log("hello")};
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  useEffect(sayHello, [number]);  //componentDidMount, componentWillUpdate 
  return (
    <div className="App">
      <div>Hi</div> 
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  )
}\
*/

/*
const contents = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
]

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <div className="App">
      {contents.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}*/

/*
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
*/

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
