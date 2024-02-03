export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (<li>
    <label>
      <input
        type="checkbox"
        checked={completed}
         onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      {title}
    </label>
    {/* passing a function in onClick and call the deleteTodo() with the todo.id */}
    <button 
    onClick={() => deleteTodo(id)} className="btn btn-danger"
    >Delete</button>
  </li>
    )
}