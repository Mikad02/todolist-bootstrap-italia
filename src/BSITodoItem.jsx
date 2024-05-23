export function BSITodoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <li>
      <div className="list-item">
        <div className="it-thumb">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
            className="w-75 h-75"
          />
        </div>
        <div className="it-right-zone">
          <span className="text"> {title} </span>
          <button
            onClick={() => deleteTodo(id)}
            className="btn btn-danger"
          >
            Rimuovi
          </button>
        </div>
      </div>
    </li>
  );
}
