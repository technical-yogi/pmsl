import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllPollRequest } from "../actions/index";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { VotePollRequest } from "../actions/index";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  container: {
    paddingBottom: "21px",
    border: "1px solid grey",
    marginBottom: "1%"
  },
  button: {
    marginLeft: "43%",
    marginTop: "3%"
  }
}));

const Poll = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const stateSelector = useSelector(
    state => state && state.listAllPollState && state.listAllPollState
  );

  const call = () => {
    dispatch(listAllPollRequest());
  };
  useEffect(() => {
    call();
  }, []);

  const [userDetail, setUserDetail] = useState({
    id: "",
    optText: ""
  }); 


  let data;
  if (stateSelector.data != null) {
    data = stateSelector?.data?.data?.map(value => {
      return (

        <Container
          className={classes.container}
          maxWidth="sm"
          justifyContent="center"
        >
          <Typography variant="h5" gutterBottom align="center">
            {value.title}
          </Typography>

          <Grid container spacing={3}>
            {value.options.map(element => {
              return (
                <Grid item xs>
                  <Button
                    onClick={()=>{setUserDetail({ ...userDetail, optText:element.option,id:value._id}); console.log(value._id,element.option,'asdfghjkl')}}
                  >
                    {" "}
                    <Paper className={classes.paper}>
                      {element.option}
                    </Paper>{" "}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={()=>dispatch(VotePollRequest({ ...userDetail }))}
          >
            Vote
          </Button>
        </Container>
      );
    });
  }
  return (
    <div>
      <Typography variant="h5" gutterBottom align="center">
        Welcome on My page
      </Typography>

      {data}
    </div>
  );
};
export default Poll;
