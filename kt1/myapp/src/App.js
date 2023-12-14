import Header from './components/header/index';
import FirstBlock from './components/first-block/index';
import SecondBlock from './components/second-block/index';
import React from 'react';
import ThirdBlock from './components/third-block';
import FourthBlock from './components/fourth-block';
import FiveBlock from './components/five-block';

const square_1 = {
  title: 'Полное ТО',
}

const square_2 = {
  title: 'Выравнивание колес',
};

const square_3 = {
  title: 'Настройка переключателей',
};

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock
          data={{
            square_1,
            square_2,
            square_3
          }}
        />
        <FiveBlock />
      </main>
    </div>
  );
}

export default App;
