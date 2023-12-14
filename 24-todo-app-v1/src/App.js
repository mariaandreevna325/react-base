import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([]);
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  }
  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  return (
    <div className="App">
      <h1>TodoApp</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
