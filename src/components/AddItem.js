import React, { useState, useContext, Component } from "react";
import "../App.css";
import GlobalState from "../contexts/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Grid,
  Paper,
  ButtonBase,
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import uuid from "uuid/v1";

export const AddItem = () => {
  const [name, setName] = useState("");
  const { addProd } = useContext(GlobalState);

  // const { addProd } = useContext(GlobalState)
  const addnewItem = (e) => {
    e.preventDefault();
    const newProd = {
      id: uuid(), 
      name,
      isCartItem:false
    };
    setName("");
    if(newProd.name !== '')addProd(newProd);
    console.log(newProd);
  };
  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={addnewItem}>
        {/* <TextField
          id="standard-basic"
          label="Item you want to buy"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        /> */}
        <Autocomplete
            id="standard-basic"
            options={groprods}
            name={name}
            onChange={(event, newName) => { 
              setName(newName ? newName.title : '')
            }}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="you want ..." variant="filled" />}
            // onChange={(e) => setName(e.target.value)}
            />
        <Button
          type="submit"
          value="Add Item"
          variant="contained"
          color="secondary "
        >
          Add Item
        </Button>
      </form>
    </div>
  );
};
const groprods = [
  { title: 'condensed milk'},
{ title: 'whole milk'},
{ title: 'cream cheese'},
{ title: 'cake bar'},
{ title: 'brown bread'},
{ title: 'mayonnaise'},
{ title: 'candy'},
{ title: 'ham'},
{ title: 'cling film/bags'},
{ title: 'butter milk'},
{ title: 'hard cheese'},
{ title: 'herbs'},
{ title: 'salt'},
{ title: 'cat food'},
{ title: 'fruit/vegetable juice'},
{ title: 'frozen meals'},
{ title: 'salty snack'},
{ title: 'dish cleaner'},
{ title: 'shopping bags'},
{ title: 'canned fish'},
{ title: 'flour'},
{ title: 'berries'},
{ title: 'beef'},
{ title: 'root vegetables'},
{ title: 'chocolate marshmallow'},
{ title: 'meat'},
{ title: 'pickled vegetables'},
{ title: 'soft cheese'},
{ title: 'chewing gum'},
{ title: 'mustard'},
{ title: 'dessert'},
{ title: 'butter'},
{ title: 'chocolate'},
{ title: 'semi-finished bread'},
{ title: 'rolls/buns'},
{ title: 'dog food'},
{ title: 'pet care'},
{ title: 'onions'},
{ title: 'yogurt'},
{ title: 'detergent'},
{ title: 'chicken'},
{ title: 'bottled beer'},
{ title: 'frankfurter'},
{ title: 'canned beer'},
{ title: 'coffee'},
{ title: 'pastry'},
{ title: 'liquor'},
{ title: 'UHT-milk'},
];