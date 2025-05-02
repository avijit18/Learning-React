import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { use } from "react";

function App() {
  // let counter = 1

  // hooks are used for ui updation in react, and there are many type of hooks in
  let [counter, setCounter] = useState(0);
  let [message, setMessage] = useState("");
  let [color, setColor] = useState("");

  const addValue = () => {
    // console.log("Counter is " + counter)
    if (counter < 10) {
      setCounter(counter + 1);
      setMessage("");
      setColor("green");
    } else {
      setMessage("Maximum value reached. You cannot go beyond 10.");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setMessage("");
      setColor("orange");
    } else {
      setMessage("Minimum value reached. You cannot go below 0.");
    }
  };

  return (
    <>
      <h1>Day 2 Learning React </h1>

      <h3 style={{color}}>Count: {counter}</h3>
      <button onClick={addValue}>Add Count: </button>
      <button onClick={removeValue}>Remove Count: </button>

      {message && <p style={{ color: "red", marginTop: "1rem" }}>{message}</p>}
    </>
  );
}

export default App;
