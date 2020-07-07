import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard";

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
    minHeight: 500,
    textAlign: "center",
    marginTop: 50,
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

function ProductGrid() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.productGrid}
      container
      direction="colomn"
      justify="space-around"
      alignItems="center"
      spacing={5}
    >
      <Grid item xs={12}>
        <Typography align="center">Popular Products</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={4}>
            <ProductCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={4}>
            <ProductCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProductGrid;
