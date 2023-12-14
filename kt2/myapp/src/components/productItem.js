import React from "react";
import style from "./style.css";

function ProductItem({ product, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="product-item" onDoubleClick={() => onRemove(product.id)}>
      <main className={style.components}>
        <section className="card">
          <h2>{product.name}</h2>
          <p>Цена: {product.price} </p>
          <p>Количество: {product.count}</p>
          <div className="plusmin">
            <button class="plus" onClick={() => onIncrement(product.id)}>
              +
            </button>
            <button class="min" onClick={() => onDecrement(product.id)}>
              -
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProductItem;
