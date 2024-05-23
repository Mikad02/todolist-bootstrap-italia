export function BSITodoList({todos}) {
  return (
    <div className="it-list-wrapper m-4">
      <ul className="it-list">
        {todos.length === 0 && "Tutto pulito per ora."}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <div className="list-item">
                <div className="it-thumb">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    // onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                </div>
                <div className="it-right-zone">
                  <span className="text"> {todo.title} </span>
                  <button
                    // onClick={() a=> deleteTodo(todo.id)}
                    className="btn btn-primary"
                  >
                    Rimuovi
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
