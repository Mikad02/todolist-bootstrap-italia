import { useState } from 'react'
import { BSIHeader } from './BSIHeader'
import { BSITodoForm } from './BSITodoForm'

export default function App() {
  const [todos, setNewTodos] = useState([])
  
  function addTodo(title){
    setTodos(
      currTodos => {
          return [
              ...currTodos,
              {id: crypto.randomUUID(), title, completed: false },
          ]
      }
  )
  }

  return <>
    <BSIHeader/>
    <BSITodoForm onSubmit={addTodo}/>
  </>
}