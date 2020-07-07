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
import uuid from "uuid/v1";

export const AddItem = () => {
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const { addProd } = useContext(GlobalState);

  // const { addProd } = useContext(GlobalState)
  const addnewItem = (e) => {
    e.preventDefault();
    const newProd = {
      id: uuid(),
      name,
      amount: parseInt(amount),
    };
    setAmount(0);
    setName("");
    addProd(newProd);
    console.log(newProd);
  };
  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={addnewItem}>
        <TextField
          id="standard-basic"
          label="Item you want to buy"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="filled"
          label="Amount"
          type="number"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setAmount(e.target.value)}
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
