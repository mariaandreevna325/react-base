import {useState} from 'react';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';

function App() {
const [count, setCount] = useState(0);
const incrementCount = () => {
  setCount(count + 1);
}

  return (
    <div className="App">
     <Counter countProps={count} />
     <Button onClick={incrementCount}/>
     <Button onClick={incrementCount}/>
     <Button onClick={incrementCount}/>
     <Button onClick={incrementCount}/>

    </div>
  );
}

export default App;
