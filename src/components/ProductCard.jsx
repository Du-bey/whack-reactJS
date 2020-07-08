import React from "react";
import { Paper, Grid, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

function ProductCard({item, addProd}) {
  // const prod=item[0]
  // console.log(item)
  const classes = useStyles();
  const addnewItem = (e) => {
    e.preventDefault();
    const newProd = {
      id: item.Id, 
      name:item.Product,
      price:item.Price,
      isCartItem:false
    };
    addProd(newProd);
    console.log(newProd);
  };
  return (
    <Grid item xs={4}>
       <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase onClick={addnewItem} className={classes.image}>
            <img
              className={classes.img}
              alt="complex"
              src={require("../images/mcph.jpg")}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                <h3>{item.Product}</h3>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">${item.Price}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Grid>
  );
}

export default ProductCard;
