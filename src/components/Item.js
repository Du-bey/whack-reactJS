import React from "react";
import { Button } from "@material-ui/core";
export const Item = ({ item, delProd, addCartProd }) => {
  const name = item.name;
  const nos = item.amount;
  const price = item.price;
  const prefix = "$";
  const isCartItem = item.isCartItem;
  const addtoCart = (item) => {
    item.isCartItem = true;
    addCartProd(item);
    delProd(item.id);
  };
  return (
    <li className="plus">
      {name}
      <span>
      {
        isCartItem ? (
          <div>
             <span>
          {prefix}
          {Math.abs(price)}
        </span>
          </div>
        ) : (
            <Button onClick = {() => addtoCart(item)}>Cart</Button>
        )
      }
      </span>
      <button onClick={() => delProd(item.id)} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Item;
