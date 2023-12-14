// import { useState } from 'react';
// import React from 'react';

// const useInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue);
//   const onChange = (event) => {
//     console.log(event.target);
//   };
//   return { value, onChange };
// };

// export default function App() {
//   const name = useInput('Mr.');

//   return (
//     <div className="App">
//       <h1>hello</h1>
//       <input placeholder="имя" {...name} />
//     </div>
//   );
// }

import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
