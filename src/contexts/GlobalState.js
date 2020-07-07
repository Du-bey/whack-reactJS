import React, { createContext, useState } from "react";

export const GlobalState = createContext();

// export const GlobalStateProvider = (props) => {
//     const [transactions, setTransactions] = useState(
//         [
//             { id: 1, text: 'Flower', amount: -20 }
//         ])
//     const addTransact = (tran) => {
//         setTransactions([...transactions, tran]);
//     }

//     const delTransact = (id) => {
//         setTransactions([...transactions.filter(transaction => transaction.id !== id)])
//     }

//     return (
// <GlobalState.Provider value={{transactions :transactions, addTransact: addTransact, delTransact: delTransact}}>
//     {props.children}
// </GlobalState.Provider>
//     );
// };

export const GlobalStateProvider = (props) => {
  const [prods, setProds] = useState([]);
  const [cartProds, setcartProds] = useState([]);
  const [billamount,setbillamount]=useState(0);
  const addProd = (prod) => {
    setProds([...prods, prod]);
  };
  const addCartProd = (prod) => {
    setcartProds([...cartProds, prod]);
    // setbillamount( billamount + prod.amount * prod.price );  
  };
  const delProd = (id) => {
    setProds([...prods.filter((prods) => prods.id !== id)]);
  };
  const delCartProd = (id) => {
    setcartProds([...cartProds.filter((prods) => prods.id !== id)]);
    // setbillamount( billamount - prod.amount * prod.price );
  };

  return (
    <GlobalState.Provider
      value={{ prods: prods, addProd: addProd, delProd: delProd, cartProds: cartProds, addCartProd: addCartProd, delCartProd: delCartProd }}
    >
      {props.children}
    </GlobalState.Provider>
  );
};

export default GlobalState;
