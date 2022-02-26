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

  // ------------------------useState-React-Docs(Ex-4-TwoVariables)----------------------
  // const [user, setUser] = useState("");
  // const [age, setAge] = useState(22);

  // const onChangeHandler = (e) => {
  //   setUser(e.target.value);
  // };
  // const ageIncrement = () => {
  //   setAge((age) => age + 1);
  // };

  // ------------------------useState-React-Docs(Ex-4-TwoVariables)----------------------

  // ------------------------useState-React-Docs(ObjectsAndArraysInState)----------------------

  const [data, setData] = useState({
    firstName: "kotesh",
    secondName: "mudila",
    mail: "(kotesswarraomudila@gmail.com)"
  });
  // const firstName = data.firstName;
  // const secondName = data.secondName;
  // const mail = data.mail;
  const handleFirstChange = (e) => {
    setData({ ...data, firstName: e.target.value });
  };
  const handleLastChange = (e) => {
    setData({ ...data, secondName: e.target.value });
  };
  const handleMailChange = (e) => {
    setData({ ...data, mail: e.target.value });
  };
  // ------------------------useState-React-Docs(ObjectsAndArraysInState)----------------------

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
      {/* ------------------------useState-React-Docs(Ex-3-Checkbox)---------------------- */}
      {/* ------------------------useState-React-Docs(Ex-4-TwoVariables)---------------------- */}
      {/* <input onChange={onChangeHandler}></input> <br /> <br />
      <button onClick={ageIncrement}>Increment Age</button>
      <p>
        Hello, {user}. You are {age}
      </p> */}
      {/* ------------------------useState-React-Docs(Ex-4-TwoVariables)---------------------- */}
      {/* ------------------------useState-React-Docs(ObjectsAndArraysInState)---------------------- */}
      <input
        onChange={handleFirstChange}
        type="text"
        value={data.firstName}
      ></input>{" "}
      <br /> <br />
      <input
        onChange={handleLastChange}
        type="text"
        value={data.secondName}
      ></input>{" "}
      <br /> <br />
      <input
        onChange={handleMailChange}
        type="email"
        value={data.mail}
      ></input>{" "}
      <br /> <br />
      <p>
        {data.firstName}| {data.secondName} | ({data.mail})
      </p>
      {/* ------------------------useState-React-Docs(ObjectsAndArraysInState)---------------------- */}
    </div>
  );
}
