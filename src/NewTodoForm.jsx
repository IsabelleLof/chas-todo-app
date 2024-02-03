import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  //props.onSubmit
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    //"We call a preventDefault on the event when submitting the form,
    //and this will cancel the default event behavior (browser refresh)
    //while allowing us to execute any code we write inside handleSubmit."
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    // setTodos((currentTodos) => {
    //   return [
    //     ...currentTodos,
    //     { id: crypto.randomUUID(), title: newItem, completed: false },
    //   ];
    // });
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item"><h2>New Item</h2></label>
        <input
          value={newItem}
          //change the state with onChange by calling setNewItem
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
