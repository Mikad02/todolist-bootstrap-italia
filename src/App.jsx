import { useEffect, useState } from "react";
import { BSIHeader } from "./BSIHeader";
import { BSITodoForm } from "./BSITodoForm";
import { BSITodoList } from "./BSITodoList";

export default function App() {
  const [todos, setTodos] = useState(() =>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) { return []; }
    return JSON.parse(localValue);
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos((currTodos) => {
      return [
        ...currTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed){
    setTodos(currTodos=>{
      return currTodos.map(todo=>{
        if(todo.id === id){
          return {...todo, completed}
        }
        else {return todo}
      })
    })
  }

  function deleteTodo(id){
    setTodos(currTodos=>{
      return currTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <BSIHeader />
      <BSITodoForm onSubmit={addTodo} />
      <h2 className="mx-3"> Task attuali: </h2>
      <BSITodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}
