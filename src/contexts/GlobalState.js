import React, { createContext, useState, useEffect } from "react";
import {csv, contourDensity} from 'd3';
import {parse} from "papaparse";
import { a, rec } from './trialread.js';
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
  const data = parse(a, {header:true});
  const sugg = parse(rec, {header:true});
  const[user,setUser]=useState(0);
  // console.log(sugg.data[user].items);
  const itemdata = sugg.data[user].items;
  const[suggprods,setsuggprods]=useState(itemdata.split(","));
  const [prods, setProds] = useState([]);
  const [cartProds, setcartProds] = useState([]);
  const [billamount,setbillamount]=useState(0);
  // const [data,setData]=useState();
  const addProd = (prod) => {
    console.log(prod);
    setProds([...prods.filter((item) => item.id !== prod.id),prod]);
    console.log(prods)
  };
  const addCartProd = (prod) => {
    setcartProds([...cartProds, prod]);
    const c = billamount +  + Math.abs(prod.price);
    setbillamount(c);
    console.log(billamount);
  };
  const delProd = (id) => {
    setProds([...prods.filter((prods) => prods.id !== id)]);
  };
  const delCartProd = (id) => {
    const x = [...cartProds.filter((prods) => prods.id === id)]
    setcartProds([...cartProds.filter((prods) => prods.id !== id)]);
    console.log(x.price)
    const c = Math.abs(billamount) - Math.abs(x[0].price);
    setbillamount(Math.abs(c));
  };
  return (
    <GlobalState.Provider
      value={{ prods: prods, addProd: addProd, delProd: delProd, cartProds: cartProds, addCartProd: addCartProd, delCartProd: delCartProd, suggprods:suggprods, data:data, billamount:billamount}}
    >
      {props.children}
    </GlobalState.Provider>
  );
};

export default GlobalState;
