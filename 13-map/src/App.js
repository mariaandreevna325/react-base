import { useState } from 'react';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';

const text = [
  'Click me',
  'click me',
  'hit me',
  'prese me',
  'нажми меня',
  'нажми меня',
];
function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter countProps={count} />
      {text.map((text) => {
        return <Button onClick={incrementCount} text={text} />;
      })}
    </div>
  );
}

export default App;
