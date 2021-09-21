import React from "react";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";  
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import history from "../history";
//import Form from './Form';
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
//import axios from "axios";
import { setName, setPwd, setRule } from "../actions/pmsaction";
import { signUpRequest, logInRequest } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from '@material-ui/core/InputLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px"
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2)
    },
    "& .MuiInput-underline": {
      width: "300px"
    },
    "& .MuiSelect-select": {
      padding: "27px 12px 10px"
    }
  },


}));

const Register = () => {
  const dispatch = useDispatch();

  const selectorState = useSelector(
    state => state && state.api_state && state.api_state
  );
  const selectorState2 = useSelector(
    state => state && state.loginState && state.loginState
  );

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/Dashboard");
    }
  }, [])

  React.useEffect(() => {
    console.log(selectorState2, "selectorState2");

    // if (selectorState2.data != null) {
    //   let user = jwt.verify(selectorState2.data.token, "jwt_tok");
    //   setToken(selectorState2.data.token);
    //   setUserType(user.role);
    // }
    if (selectorState2.isSuccess) {
      if (selectorState2.data.error === 0) {
        history.push("/Dashboard");
      }
      else {
        // some messag to display username and password is invalid 
      }

    }
  }, [selectorState2]);

  //for understanding purpose above step only

  const classes = useStyles();

  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
    role: ""
  });

  const [inputValue, setvalue] = useState({
    username: "",
    password: ""
  });

   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (credentials.username && credentials.password && credentials.role) {
      // console.log(credentials, "__________credentials");
      dispatch(signUpRequest({ ...credentials }));
    }
  };

  const loginSubmit = e => {
    e.preventDefault();
    if (inputValue.username && inputValue.password) {
      dispatch(logInRequest({ ...inputValue }));
    }

    //first here i should check credential is true or not then landing on another page will be done
    if (selectorState2.isSuccess && selectorState2.data != null) {
      console.log("action should be performed");
    }
  };

  const handleUsername = (e, key) => {
    setCredentials({ ...credentials, [key]: e.target.value });
  };
  const setUserValue = (e, key) => {
    setvalue({ ...inputValue, [key]: e.target.value });
  };

  console.log(credentials.username, "asdfghjkl", credentials.password);

  const [showPlaceholder, setShowPlaceholder] = useState(value === "none");

  // const apicall = async ()=>{
  //  // useEffect(() => {
  //      await axios.get(`https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`).then(({data}) => {
  // // i think no need to store it
  //      }).catch((err) => {
  //         console.warn(err)
  //      })
  //})   https://secure-refuge-14993.herokuapp.com/login?username=amit&password=some

  //api work done
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-center">
          <div className="p-3 m-4 shadow-lg rounded-3">
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Register" {...a11yProps(0)} />
                <Tab label="Log in " {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            {/* <button className='btn btn-dark btn-block btn-lg'>Signup</button> */}
            <TabPanel value={value} index={0}>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  variant="filled"
                  required
                  onChange={e => handleUsername(e, "username")}
                />
                <TextField
                  label="Password"
                  variant="filled"
                  type="password"
                  required
                  onChange={e => handleUsername(e, "password")}
                //   onChange={handleChang}
                />
                {/* <TextField
                  label="role"
                  variant="filled"
                  required
                  onChange={e => handleUsername(e, "role")}
                  //   onChange={handleChan}
                /> */}

                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  onFocus={(e) => setShowPlaceholder(false)}
                  // value={age}

                  onChange={e => handleUsername(e, "role")}
                >
                  <MenuItem className={clsx(classes.menuitem, !showPlaceholder ? classes.menuitemhidden : null)} key="0" disabled value="none" >Role</MenuItem>
                  <MenuItem value={"guest"}>guest</MenuItem>
                  <MenuItem value={"admin"}>admin</MenuItem>
                </Select>

                <div>
                  <Button
                    variant="contained"
                    disabled={selectorState.isLoading}  
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={selectorState.isLoading}
                  >
                    {selectorState.isLoading ? <CircularProgress />: "Signup"}
                  </Button>
                </div>
              </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <form className={classes.form} onSubmit={loginSubmit}>
                <TextField
                  label="Username"
                  variant="filled"
                  required
                  onChange={e => setUserValue(e, "username")}
                />
                <TextField
                  label="Password"
                  variant="filled"
                  type="password"
                  required
                  onChange={e => setUserValue(e, "password")}
                />
                <div>
                  <Button
                    variant="contained"
                    disabled={selectorState2.isLoading}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={selectorState2.isLoading}
                  >
                    {selectorState2.isLoading ? <CircularProgress /> : "Login"}
                  </Button>
                </div>
              </form>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
