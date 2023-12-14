import './App.css';
import persons from './data/persons';
import Person from './components/person';

function App() {
  return (
    <div className="App">
      {persons.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
}

export default App;
