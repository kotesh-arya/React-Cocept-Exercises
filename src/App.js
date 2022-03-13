import "./styles.css";
import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";
let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Buy milk", done: false },
  { id: 2, title: "Buy milk", done: false }
];
export default function App() {
  // -------------6-----------useState-React-Docs(ArrayInState)----------------------
  const [todos, setTodos] = useState(initialTodos);
  const handleAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: nextId++, //just create a new Todo by giving a new ID
        title: title, //title [setTitle("xxx")] comes from AddTodo component
        done: false //unchecked new todo
      }
    ]);
  };
  const handleChangeTodo = (nextTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  };
  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((task) => task.id !== todoId));
  };
  // -------------6-----------useState-React-Docs(ArrayInState)----------------------

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
  // -------------1-----------Dev-Ed-simplified-example----------------------
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
  // --------------1----------Dev-Ed-simplified-example----------------------

  // --------------2---------useState-React-Docs(Ex-3-Checkbox)----------------------

  // In this example, the liked state variable holds a boolean. When you click the input, setLiked updates the liked state variable with whether the browser checkbox input is checked. The liked variable is used to render the text below the checkbox.

  //  const [liked,setLiked ] = useState(false);
  //  const onChangeHandler = (e) =>{
  //    setLiked(e.target.checked)
  //  }
  // ---------------2---------useState-React-Docs(Ex-3-Checkbox)----------------------

  // ----------------3--------useState-React-Docs(Ex-4-TwoVariables)----------------------
  // const [user, setUser] = useState("");
  // const [age, setAge] = useState(22);

  // const onChangeHandler = (e) => {
  //   setUser(e.target.value);
  // };
  // const ageIncrement = () => {
  //   setAge((age) => age + 1);
  // };

  // -----------------3-------useState-React-Docs(Ex-4-TwoVariables)----------------------

  // --------------4----------useState-React-Docs(ObjectInState)----------------------

  // const [data, setData] = useState({
  //   firstName: "kotesh",
  //   secondName: "mudila",
  //   mail: "(kotesswarraomudila@gmail.com)"
  // });
  // // const firstName = data.firstName;
  // // const secondName = data.secondName;
  // // const mail = data.mail;
  // const handleFirstChange = (e) => {
  //   setData({ ...data, firstName: e.target.value });
  // };
  // const handleLastChange = (e) => {
  //   setData({ ...data, secondName: e.target.value });
  // };
  // const handleMailChange = (e) => {
  //   setData({ ...data, mail: e.target.value });
  // };
  // ---------------4---------useState-React-Docs(ObjectInState)----------------------

  // ---------------5---------useState-React-Docs(NestedObjectInState)----------------------

  // const [person, setPerson] = useState({
  //   name: "King",
  //   artwork: {
  //     title: "Kotesh Mudila",
  //     city: "Javascript",
  //     image:
  //       "https://pbs.twimg.com/profile_images/1473707125641732108/NVdKk04p_400x400.jpg"
  //   }
  // });

  // const titleChange = (e) => {
  //   setPerson({
  //     ...person, //copy the spreaded person object first
  //     artwork: {
  //       //create a new copy of artwork object by writing it hardcoded below
  //       ...person.artwork, // same data from artwork object
  //       title: e.target.value
  //     }
  //   });
  // };

  // const cityChange = (e) => {
  //   setPerson({
  //     ...person,
  //     artwork: {
  //       ...person.artwork,
  //       city: e.target.value
  //     }
  //   });
  // };
  // const imageChange = (e) => {
  //   setPerson({
  //     ...person,
  //     artwork: {
  //       ...person.artwork,
  //       image: e.target.value
  //     }
  //   });
  // };
  // -------------5-----------useState-React-Docs(NestedObjectInState)----------------------
  const [him, setHim] = useState("Taylor");
  const [textSize, setTextSIze] = useState("4rem");
  const resetInput = () => {
    setHim("User");
  };

  return (
    <div className="App">
      {/* ------------6------------useState-React-Docs(ArrayInState)---------------------- */}

      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />

      {/* ------------6------------useState-React-Docs(ArrayInState)---------------------- */}
      {/* -------------1-----------Dev-Ed-simplified-example---------------------- */}
      {/* <button onClick={decrementValue}>-</button>
      <span>
        {count} {theme}
      </span>
      <button onClick={incrementValue}>+</button> */}
      {/* ------------1------------Dev-Ed-simplified-example---------------------- */}
      {/* ----------------2--------useState-React-Docs(Ex-3-Checkbox)---------------------- */}
      {/* 
     <input onChange={onChangeHandler} type="checkbox" checked ={liked}></input>
     <p> {liked ? "likes this" :"Don't like this"}</p> */}
      {/* ----------------2--------useState-React-Docs(Ex-3-Checkbox)---------------------- */}
      {/* ---------3---------------useState-React-Docs(Ex-4-TwoVariables)---------------------- */}
      {/* <input onChange={onChangeHandler}></input> <br /> <br />
      <button onClick={ageIncrement}>Increment Age</button>
      <p>
        Hello, {user}. You are {age}
      </p> */}
      {/* ----------3--------------useState-React-Docs(Ex-4-TwoVariables)---------------------- */}
      {/* -----------------4-------useState-React-Docs(ObjectInState)---------------------- */}
      {/* <input
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
      </p> */}
      {/* -------------------4-----useState-React-Docs(ObjectInState)---------------------- */}
      {/* -----------5-------------useState-React-Docs(nestedObjectInState)---------------------- */}
      {/* <input
        onChange={titleChange}
        type="text"
        value={person.artwork.title}
      ></input>{" "}
      <br /> <br />
      <input
        onChange={cityChange}
        type="text"
        value={person.artwork.city}
      ></input>{" "}
      <br /> <br />
      <input
        onChange={imageChange}
        type="text"
        value={person.artwork.image}
      ></input>{" "}
      <br /> <br />
      <p>
        {" "}
        {person.artwork.title} {person.artwork.city} {person.artwork.image}
      </p>
      <img src={person.artwork.image} alt={person.artwork.image} /> */}
      {/* ------------5------------useState-React-Docs(nestedObjectInState)---------------------- */}
      <input onChange={(e) => setHim(e.target.value)} value={him} />
      <button onClick={resetInput}>RESET</button>
      <p style={{ fontSize: textSize }}>Hey! {him}</p>
    </div>
  );
}
