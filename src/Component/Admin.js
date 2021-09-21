import React from "react";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container, Button } from "@material-ui/core";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {AddPollRequest} from '../actions/index'
import { useDispatch} from "react-redux";
import history from "../history";
import EditIcon from '@material-ui/icons/Edit';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  },
  title: {
    padding: "27px 141px 10px"
  },
  optcontainer: {
    border: "1px solid grey",
    background: "whitesmoke"
  }
}));

const Admin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [polldetail, setpolldetail] = React.useState({
    title: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
});

const setPollValue = (e, key) => {
    setpolldetail({...polldetail, [key]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (polldetail.title && polldetail.option1 && polldetail.option2 && polldetail.option3 && polldetail.option4) {
      // console.log(credentials, "__________credentials");
      console.log("onsubmit performed");
      dispatch(AddPollRequest({ ...polldetail}));
      history.push(`/AdminPoll`);
    }
  };

  return (
    <div>
      <h3>Admin Page</h3>
      <AddIcon fontSize="large" />
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Add Poll" {...a11yProps(0)} />
          <Tab label="modify poll" {...a11yProps(1)} />
          <Tab label="Delete poll" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Container
            className={classes.container}
            maxWidth="sm"
            justifyContent="center"
          >
            <form className={classes.optcontainer} onSubmit={handleSubmit}>
              {/* <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Title</InputLabel>
        <FilledInput id="component-filled" />
      </FormControl> */}
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="title"
                variant="filled"
                className={classes.title}
                onChange={e => setPollValue(e, "title")}
              />
              {/* <div className = "optionContainer">
      <TextField id="outlined-basic" label="option1" variant="outlined" />
      <TextField id="outlined-basic" label="option2" variant="outlined" />
      <TextField id="outlined-basic" label="option3" variant="outlined" />
      <TextField id="outlined-basic" label="option4" variant="outlined" />
      </div> */}
              <Grid container direction={"row"} spacing={3}>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="option1"
                    variant="outlined"
                    onChange={e => setPollValue(e, "option1")}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="option2"
                    variant="outlined"
                    onChange={e => setPollValue(e, "option2")}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="option3"
                    variant="outlined"
                    onChange={e => setPollValue(e, "option3")}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="option4"
                    variant="outlined"
                    onChange={e => setPollValue(e, "option4")}
                  />
                </Grid>
              </Grid>
              <Typography variant="h2" gutterBottom align="center">
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Add
                </Button>
              </Typography>
            </form>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Button variant="contained" color="primary" onClick={()=>history.push("/AdminPoll")}> 
                  view&modify
                </Button>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Delete Poll
        </TabPanel>
      </div>
    </div>
  );
};
export default Admin;
