import React, { useState } from "react";

function Item({ name, category }) {
const [isCart, setCart] = useState(false)
  function handleClick(){
    setCart(!isCart)

  }
  const listClass = isCart ? "in-cart" : "";
  const color = isCart? "remove":"add"
  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={color} onClick={handleClick}>{isCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
