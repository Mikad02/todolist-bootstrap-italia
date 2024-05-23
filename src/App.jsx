import { useState } from "react";
import { BSIHeader } from "./BSIHeader";
import { BSITodoForm } from "./BSITodoForm";
import { BSITodoList } from "./BSITodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currTodos) => {
      return [
        ...currTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  return (
    <>
      <BSIHeader />
      <BSITodoForm onSubmit={addTodo} />
      <h2 className="mx-3"> Todo list: </h2>
      <BSITodoList todos={todos}/>
    </>
  );
}
