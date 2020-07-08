import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import "./images/mcph.jpg";
import Map from "./Map";
import { AddItem } from "./components/AddItem";
import { ItemList } from "./components/ItemList";
import { Cart } from "./components/Cart";
import { GlobalStateProvider } from "./contexts/GlobalState.js";
import { Grid } from "@material-ui/core";
import AppBarImpl from "./components/AppBarImpl";
import ProductGrid from "./components/ProductGrid";
import ShopLocSelector from "./components/ShopLocSelector";
import CsvReader from "./components/csvReader";
import Totalbill from "./components/Totalbill";

// for app bar
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: 50,
    backgroundColor: "#C0C0C0",
    borderRadius: 25,
    padding: 10,
  },
  bigDaddy: {
    textAlign: "center",
    marginTop: 50,
    overflow: "hidden",
    marginBottom: 50,
  },
  productGrid: {
    paddingBottom: 20,
    paddingTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function App() {
  //appbar
  const classes = useStyles();

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <AppBarImpl />
      <div className="gridControlDiv">
        <Grid
          className={classes.container}
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={10}>
            <Grid container justify="space-around" alignItems="flex-start">
              <Grid item xs={5}>
                <ShopLocSelector />
              </Grid>
              <Grid item xs={10} className={classes.bigDaddy}>
                <Map className={classes.map} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <GlobalStateProvider>
              <Grid item xs={12}>
                <AddItem />
              </Grid>
              <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                style={{ minHeight: 750 }}
              >
                <Grid item xs={12}>
                  <ItemList />
                </Grid>
                <Grid item xs={12}>
                  <h2>Cart</h2>
                </Grid>
                <Grid item xs={12}>
                  <Cart />
                </Grid>
              <Totalbill />
              </Grid>
            </GlobalStateProvider>
          </Grid>
        </Grid>
      </div>
      <GlobalStateProvider>
      <div className="productGridControlDiv">
        <ProductGrid />
      </div>
      </GlobalStateProvider>
      <div>
        <CsvReader />
      </div>
    </div>
  );
}

export default App;
