import { useState } from "react";
export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        placeholder="Add Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button
        onclick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        ADD
      </button>
    </div>
  );
}
