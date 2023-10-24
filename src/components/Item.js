import React, { useState } from "react";

function Item({ name, category }) {

  const [isItemAdded, setIsItemAdded] = useState(false)
  const [buttonText, setButtonText] = useState("Add to Cart")


  function handleRemoveFromCart() {
    if (isItemAdded) {
      setIsItemAdded(false);
      setButtonText("Add to Cart")
    } else {
      setIsItemAdded(true);
      setButtonText("Remove from Cart")
    }
  }


  return (
    <li className={isItemAdded ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleRemoveFromCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
