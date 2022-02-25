import "./styles.css";
import { useState } from "react";
export default function App() {
  // const [like, setLike] = useState(false);
  // const headclick = () => {
  //   //updating the count variable each time the head gets clicked
  //   // setCount(count + 1);
  //   // setCount(count + 23)
  //   // setCount(count + 3)  all these above settings will be overriden by the last count setting
  //   // setCount(count + 23)
  //   // setCount(count + 23)
  //   // setCount(count + 73) ///The last setState only will be executed ;)
  //   setCount((pervAge) => pervAge + 1);
  //   setCount((pervAge) => pervAge + 1); // here count is represented as prevAge as we always use count inside the arguments of setCount :)
  //   setCount((pervAge) => pervAge + 16);
  // };
  // const boxChecked = () => {
  //   setLike(true);
  // };
  //  const mowa = () =>{}
  // const sampleFunction = () => {
  //   console.log("Hello baby");
  //   return 7;

  const [state, setState] = useState({ count: 1, theme: "black" });
  let count = state.count;
  let theme = state.theme;
  function incrementValue() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }
  const decrementValue = () => {
    // setState((prevCount) => prevCount.count + 1);
  };
  return (
    <div className="App">
      {/* <h2 onClick={headclick}>Now the count after a click is {count}!</h2>
      <input onClick={boxChecked} type="checkbox" checked={like} />{" "}
      <p>{like ? "likes this" : "Don't like this"} This</p> */}

      <button onClick={decrementValue}>-</button>
      <span>
        {count} {theme}
      </span>
      <button onClick={incrementValue}>+</button>
    </div>
  );
}
