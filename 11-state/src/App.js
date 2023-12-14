import './App.css';
import RandomNumber from './components/RandomNumber';

function App() {
  const maxNum = 100; 
  return (
    <div className="App">
     <RandomNumber maxNum={maxNum} />
    </div>
  );
}

export default App;
