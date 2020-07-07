import React, { useContext } from "react";
import GlobalState from "../contexts/GlobalState";
import Item from "./Item";

export const Cart = () => {
  const { cartProds, delCartProd } = useContext(GlobalState);
  return (
    <div>
      <ul className="list">
        {cartProds.map((item) => (
          <Item key={item.id} item={item} delProd={delCartProd} />
        ))}
      </ul>
    </div>
  );
};
export default Cart;
