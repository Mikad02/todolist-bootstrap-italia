import { useState } from "react";

export function BSITodoForm({onSubmit}) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-wrap justify-content-center"
    >
      <div className="form-group w-50">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="form-control"
          type="text"
          id="formGroupExampleInput"
        />
      </div>
      <div className="d-flex justify-content-center w-100">
        <button className="btn btn-primary" type="submit">
          Aggiungi
        </button>
      </div>
    </form>
  );
}
