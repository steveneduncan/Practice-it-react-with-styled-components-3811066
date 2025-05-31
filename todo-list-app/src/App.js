import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const todos = ["Buy groceries", "Finish homework", "Go for a run"];

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
