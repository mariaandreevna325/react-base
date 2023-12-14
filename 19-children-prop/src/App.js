import './App.css';
import Wrapper from './components/Wrapper';
function App() {
  return (
    <div className="App">
      <Wrapper
        color="lightblue"
        width="200px"
        height="100px"
        padding="40px"
        margin="20px auto"
      >
        <h2>Text inside of the Wrapper</h2>
        <button src="#">Click me!</button>
      </Wrapper>

      <Wrapper
        color="lightgreen"
        width="200px"
        height="100px"
        padding="40px"
        margin="20px auto"
      >
        <h2>Another text</h2>
        <p>some discription</p>
        <input type="text" placeholder="enter value" />
      </Wrapper>

      <Wrapper
        color="red"
        width="200px"
        height="100px"
        padding="40px"
        margin="20px auto"
      >
        <h2>Another text 2</h2>
        <p>some discription</p>
        <input type="text" placeholder="enter" />
      </Wrapper>

      <Wrapper
        color="green"
        width="200px"
        height="100px"
        padding="40px"
        margin="20px auto"
      >
        <h2>Text inside of the Wrapper</h2>
        <button src="#">Click me!2</button>
      </Wrapper>
    </div>
  );
}

export default App;
