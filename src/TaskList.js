import { useState } from "react";

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <div className="item-row">
      {" "}
      <br /> <br />
      <input type="checkbox"></input>
      <p>Title goes here</p>
      <button>EDIT</button>
      <button>DELETE</button>
    </div>
  );
}
