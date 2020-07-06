import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import "./images/mcph.jpg";
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
import MenuIcon from "@material-ui/icons/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

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

function App() {
  //appbar
  const classes = useStyles();

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      {/* appBar */}
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              WHACK
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className="gridControlDiv">
        <Grid
          className={classes.container}
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          {/* Location Menu */}
          <Grid item xs={6}>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button
                    variant="contained"
                    color="primary"
                    {...bindTrigger(popupState)}
                    className="popUpMenu"
                  >
                    Choose Store Location
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>
                      Walmart Hyderabad
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      Walmart Indore
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      Walmart Mumbai
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      Walmart Delhi
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      Walmart Bhopal
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      Walmart Kanpur
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      Walmart Kolkata
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-multiline-flexible"
              label="Your List Please"
              multiline
              rowsMax={4}
              value={value}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} className={classes.bigDaddy}>
            Map Here
          </Grid>
        </Grid>
      </div>
      <div className="productGridControlDiv">
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
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt="complex"
                          src={require("./images/mcph.jpg")}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            Standard license
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Full resolution 1920x1080 • JPEG
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            ID: 1030114
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer" }}
                          >
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">$19.00</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt="complex"
                          src={require("./images/mcph.jpg")}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            Standard license
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Full resolution 1920x1080 • JPEG
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            ID: 1030114
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer" }}
                          >
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">$19.00</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt="complex"
                          src={require("./images/mcph.jpg")}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            Standard license
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Full resolution 1920x1080 • JPEG
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            ID: 1030114
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer" }}
                          >
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">$19.00</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt="complex"
                          src={require("./images/mcph.jpg")}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            Standard license
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Full resolution 1920x1080 • JPEG
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            ID: 1030114
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer" }}
                          >
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">$19.00</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt="complex"
                          src={require("./images/mcph.jpg")}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            Standard license
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Full resolution 1920x1080 • JPEG
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            ID: 1030114
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer" }}
                          >
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">$19.00</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt="complex"
                          src={require("./images/mcph.jpg")}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            Standard license
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            Full resolution 1920x1080 • JPEG
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            ID: 1030114
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer" }}
                          >
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">$19.00</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
