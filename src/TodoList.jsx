import { TodoItem } from "./TodoItem";
import PropTypes from "prop-types";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* Short curcuiting  */}
      {todos.length === 0 && "No Todos"}
      {/* map the todos */}
      {todos.map((todo) => {
        {
          /* adding a unique key to the <li> element */
        }
        return (
          <TodoItem
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
