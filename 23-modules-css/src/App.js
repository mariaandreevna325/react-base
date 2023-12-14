import './App.css';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>App components heading</h1>
        <h2>Heading in the app components</h2>
        <button className="my-button">click me in the inf components</button>
      </div>
    </div>
  );
}

export default App;
