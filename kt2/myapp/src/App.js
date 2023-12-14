import React, { useState } from "react";
import Productitem from "./components/productItem";
import style from "./App.css";

const Data = [
  { id: 1, name: "Велосипед", price: 1000, count: 1 },
  { id: 2, name: "Самокат", price: 700, count: 1 },
  { id: 3, name: "Ролики", price: 1300, count: 2 },
  { id: 4, name: "Сноуборд", price: 19000, count: 4 },
];

function App() {
  const [data, setData] = useState(Data);

  const addProduct = () => {
    const name = prompt("Введите имя продукта:");
    const price = parseFloat(prompt("Введите цену продукта:"));
    const count = parseInt(prompt("Введите количество продуктов:"));
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    setData([...data, { id, name, price, count }]);
  };

  const decrement = (id) => {
    setData(
      data.map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const increment = (id) => {
    setData(
      data.map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setData(data.filter((product) => product.id !== id));
  };

  return (
    <main className={style.components}>
      <div className="App">
        {data.map((product) => (
          <Productitem
            key={product.id}
            product={product}
            onIncrement={increment}
            onDecrement={decrement}
            onRemove={removeProduct}
          />
        ))}
      </div>
      <div className="addcarddiv">
        <button className="addcard" onClick={addProduct}>
          добавить карточку
        </button>
      </div>
    </main>
  );
}

export default App;
