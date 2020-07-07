import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
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

function ShopLocSelector() {
  const [storeLoc, setStoreLoc] = React.useState("Choose Store Location");
  const classes = useStyles();
  const setKolkata = (event) => {
    setStoreLoc("Walmart Kolkata");
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            color="primary"
            {...bindTrigger(popupState)}
            className="popUpMenu"
          >
            {storeLoc}
          </Button>
          <Menu {...bindMenu(popupState)} onClick={popupState.close}>
            <MenuItem onClick={() => setStoreLoc("Walmart Hyderabad")}>
              Walmart Hyderabad
            </MenuItem>
            <MenuItem onClick={() => setStoreLoc("Walmart Indore")}>
              Walmart Indore
            </MenuItem>
            <MenuItem onClick={() => setStoreLoc("Walmart Mumbai")}>
              Walmart Mumbai
            </MenuItem>
            <MenuItem onClick={() => setStoreLoc("Walmart Delhi")}>
              Walmart Delhi
            </MenuItem>
            <MenuItem onClick={() => setStoreLoc("Walmart Bhopal")}>
              Walmart Bhopal
            </MenuItem>
            <MenuItem onClick={() => setStoreLoc("Walmart Kanpur")}>
              Walmart Kanpur
            </MenuItem>
            <MenuItem onClick={() => setStoreLoc("Walmart Kolkata")}>
              Walmart Kolkata
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default ShopLocSelector;
