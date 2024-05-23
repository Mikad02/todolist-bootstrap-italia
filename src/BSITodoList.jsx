import { BSITodoItem } from "./BSITodoItem";

export function BSITodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="it-list-wrapper m-4">
      <ul className="it-list">
        {todos.length === 0 && "Tutto pulito per ora."}
        {todos.map((todo) => {
          return <BSITodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />;
        })}
      </ul>
    </div>
  );
}
