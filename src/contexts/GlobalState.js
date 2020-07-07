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
  const addProd = (prod) => {
    setProds([...prods, prod]);
  };
  const delProd = (id) => {
    setProds([...prods.filter((prods) => prods.id !== id)]);
  };

  return (
    <GlobalState.Provider
      value={{ prods: prods, addProd: addProd, delProd: delProd }}
    >
      {props.children}
    </GlobalState.Provider>
  );
};

export default GlobalState;
