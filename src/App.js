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
  // ------------------------Dev-Ed-simplified-example----------------------
  // const [state, setState] = useState({ count: 1, theme: "black" });
  // let count = state.count;
  // let theme = state.theme;
  // function incrementValue() {
  //   setState((prevState) => {
  //     return { ...prevState, count: prevState.count + 1 };
  //   });
  // }
  // const decrementValue = () => {
  //   // setState((prevCount) => prevCount.count + 1);
  // };
  // ------------------------Dev-Ed-simplified-example----------------------

  // ------------------------useState-React-Docs(Ex-3-Checkbox)----------------------

  // In this example, the liked state variable holds a boolean. When you click the input, setLiked updates the liked state variable with whether the browser checkbox input is checked. The liked variable is used to render the text below the checkbox.

  //  const [liked,setLiked ] = useState(false);
  //  const onChangeHandler = (e) =>{
  //    setLiked(e.target.checked)
  //  }
  // ------------------------useState-React-Docs(Ex-3-Checkbox)----------------------

  return (
    <div className="App">
      {/* ------------------------Dev-Ed-simplified-example---------------------- */}
      {/* <button onClick={decrementValue}>-</button>
      <span>
        {count} {theme}
      </span>
      <button onClick={incrementValue}>+</button> */}
      {/* ------------------------Dev-Ed-simplified-example---------------------- */}
      {/* ------------------------useState-React-Docs(Ex-3-Checkbox)---------------------- */}
      {/* 
     <input onChange={onChangeHandler} type="checkbox" checked ={liked}></input>
     <p> {liked ? "likes this" :"Don't like this"}</p> */}

      {/* ------------------------useState-React-Docs---------------------- */}
    </div>
  );
}
