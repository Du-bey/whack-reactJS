import React, { useContext } from "react";
import GlobalState from "../contexts/GlobalState";
import Item from "./Item";

export const ItemList = () => {
  const { prods, delProd, addCartProd } = useContext(GlobalState);
  return (
    <div>
      <ul className="list">
        {prods.map((item) => (
          <Item key={item.id} item={item} delProd={delProd} addCartProd={addCartProd} />
        ))}
      </ul>
    </div>
  );
};
export default ItemList;
