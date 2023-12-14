import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    console.log('callback in useEffect called');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);
  console.log('app render');
  console.log(todo);
  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>;
}

export default App;
