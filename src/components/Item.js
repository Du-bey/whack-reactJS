import React from "react";

export const Item = ({ item, delProd }) => {
  const amount = item.amount;
  const name = item.name;
  const prefix = "Rs.";
  const deleteItem = (id) => {
    delProd(id);
  };
  return (
    <li className="plus">
      {name}
      <span>
        {prefix}
        {Math.abs(amount)}
      </span>
      <button onClick={() => delProd(item.id)} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Item;
