import { useState } from "react";
import "./App.css";

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {

    if (todo.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  return (
    <div className="todo-container">

      <h1>My Todo List</h1>

      <div className="input-container">

        <input
          type="text"
          placeholder="Enter a todo..."
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addTodo();
            }
          }}
        />

        <button onClick={addTodo}>
          Add
        </button>

      </div>

      <ul>

        {todos.map((todo) => (

          <li key={todo.id}>

            <span
              className={todo.completed ? "completed" : ""}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>

            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default App;