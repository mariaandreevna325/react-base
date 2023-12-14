import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompletede: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHendler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  return (
    <div className="App">
      <h1>TodoApp</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodosActions />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHendler}
      />
    </div>
  );
}

export default App;
