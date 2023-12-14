import { useState } from 'react';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  }
  const resetCount = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <Counter countProps={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {count > 0 && (
        <div>
          <button style={{ backgroundColor: 'lightgreen' }}
            onClick={resetCount}
          >Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
