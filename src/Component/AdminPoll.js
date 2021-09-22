import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllPollRequest } from "../actions/index";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { ViewPollRequest } from "../actions/index";
import history from "../history";
import Pagination from "@mui/material/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  container: {
    paddingBottom: "21px",
    border: "1px solid grey",
    marginBottom: "1%",
    marginLeft:"20%"
  },
  button: {
    marginLeft: "43%",
    marginTop: "3%",
  },
}));

const AdminPoll = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [page, setpage] = useState(1);
  const stateSelector = useSelector(
    (state) => state && state.listAllPollState && state.listAllPollState
  );

  const call = () => {
    dispatch(listAllPollRequest());
  };
  useEffect(() => {
    call();
  }, []);

  let data;
  if (stateSelector.data != null) {
    data = stateSelector?.data?.data?.map((value) => {
      return (
        <Container
          className={classes.container}
          maxWidth="md"
          justifyContent="center"
          className="border-none shadow rounded p-5 my-5 mx-auto"
          
        >
          <Typography variant="h5" gutterBottom align="center">
            {value.title}
          </Typography>

          <Grid container spacing={3}>
            {value.options.map((element) => {
              return (
                <Grid item xs>
                  {" "}
                  <Paper className={classes.paper}>{element.option}</Paper>{" "}
                </Grid>
              );
            })}
          </Grid>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={() => history.push(`/ViewPoll/${value._id}`)}
          >
            view
          </Button>
        </Container>
      );
    });
  }
  if (stateSelector.isSuccess) {
    return (
      <div>
        <Typography variant="h5" gutterBottom align="center">
          View and Modify Poll
        </Typography>
        {data}
        <Pagination
          count={10}
          variant="outlined"
          color="primary"
          onChange={(event, value) => setpage(value)}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Typography variant="h5" gutterBottom align="center">
          View and Modify Poll
        </Typography>
        <h3>Please wait...</h3>
      </div>
    );
  }
};
export default AdminPoll;
