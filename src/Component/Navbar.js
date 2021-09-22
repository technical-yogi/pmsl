import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  Toolbar: {
    variant: "grey",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(13),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const stateSelector = useSelector(
    (state) => state && state.listAllPollState && state.listAllPollState
  );

  React.useEffect(() => {
    console.log(stateSelector, "navbar data");
  }, [stateSelector]);
  let redirect;
  if (localStorage.getItem("userType") === "admin") {
    redirect = "/Admin";
  } else {
    redirect = "/Poll";
  }

  return (
    <div className="navbar">
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Poll Management System
          </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link className={classes.link} to={redirect}>
              Poll
            </Link>
            <Link to="/Signout" className={classes.link}>
              Signout
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
