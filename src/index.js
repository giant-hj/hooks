import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput";
import useTabs from "./useTabs";
import useTitle from "./useTitle";
import useClick from "./useClick";
import useConfirm from "./useConfirm";
import usePreventLeave from "./usePreventLeave";
import useBeforeLeave from "./useBeforeLeave";
import useFadeIn from "./useFadeIn";
import useNetwork from "./useNetwork";
import useScroll from "./useScroll";

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  )
}

/*
const App = () => {
  const handleNetwork = (online) => {
    console.log(online ? "We just went online" : "we are offline");
  }
  const onLine = useNetwork(handleNetwork);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"} </h1>
    </div>
  );
}
*/

/*
const App = () => {
  const fadeInH1 = useFadeIn(2, 3);
  const fadeInP = useFadeIn(5, 6);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lalalalal asafasfcvsafw ccxcxcdqwd</p>
    </div>
  )
}
*/

/*
const App = () => {
  const [enablePrevent, disablePrevent] = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  )
}
*/

/*
const App = () => {
  const deleteWorld = () =>  console.log("Delete the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  )
}
*/

/*
const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <div ref={title}>Hi</div>
    </div>
  )
}
*/

/*
const App = () => {
  const titleUpdater = useTitle("Loading...");
  //setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  )
}
*/

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
