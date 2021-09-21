import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewPollRequest } from "../actions/index";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import { disable } from "workbox-navigation-preload";
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import {UpdatePollRequest} from "../actions/index";
import {DeleteOptRequest}  from "../actions/index";
import {AddOptRequest} from "../actions/index";
import { green } from "@material-ui/core/colors";
import { grid } from "@material-ui/system";
import AddIcon from '@material-ui/icons/Add';
import history from "../history";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const useStyles = makeStyles({
  
  container :{
    border: "1px solid grey",
    // backgroundColor: "cadetblue",
    padding : "24px",
    marginTop: "30px",    
  },
  title :{
    marginTop: "3px",
    width:"100%",
    // backgroundColor :"teal",
  },
  paper : {
    // backgroundColor :"teal",
  },
  last : {
    display: "flex",
    justifyContent: "space-between"
  },
  newoption : {
    width: "100%",
  }
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ViewPoll = ({ match }) => {
  
  const titleUpdateState = useSelector(
    state => state && state.TitlelUpdate && state.TitlelUpdate
  );
  const newOptionState = useSelector (
    state => state && state.AddOption && state.AddOption
  );
  const deleteOptionState = useSelector (
    state => state && state.DeleteOption && state.DeleteOption
  ); 

 //snackbar 

 const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  }

//
  const dispatch = useDispatch();
  const classes = useStyles();
  const call = () => {
    dispatch(ViewPollRequest(match.params.id));
  };
  useEffect(() => {
    call();
  }, []);
  const singlePollStatus = useSelector(
    state => state && state.ViewPollStatus && state.ViewPollStatus
  );
  const[tfiled,settfield] = useState(true);
  const [userDetail, setUserDetail] = useState({
    id: match.params.id,
    optText: null,
  }); 

  const del_opt = (option)=>
  {
    setUserDetail( {...userDetail,optText:option});  
    
  }
  if(userDetail.optText!==null)
  {
    dispatch(DeleteOptRequest({ ...userDetail}));
    // history.push(`/AdminPoll`);
  }

  // React.useEffect(() => {
  //   if (deleteOptionState.isSuccess) {
  //      history.push(`/AdminPoll`);
  //   }
  // }, [deleteOptionState ]);
 
  
  var[updatep,setupdatep] = useState({
      id: match.params.id,
      title: " ",
    });
  
  // if (singlePollStatus.data != null) 
  // {
  // let DefaultTitle =  singlePollStatus?.data?.data?.title; 
  //   setupdatep({...updatep,title:DefaultTitle});  
  // }
 
 const setValue= (e) =>
  {
    setupdatep({ ...updatep, title: e.target.value });    
  }
  const TitleUpdate = (e) =>
  {
    dispatch(UpdatePollRequest({...updatep}))
    // should make a condition like after getting response like title is update then only i will push it
   // history.push(`/AdminPoll`);
  }
  React.useEffect(() => {
  if (titleUpdateState.isSuccess) {
    setOpen(true);
  }
}, [titleUpdateState]);

  const[Noption,setNoption] = useState(
    {
      id: match.params.id,
      option: null,
    }
  );
  const setOption = (e) =>
  {
    setNoption({ ...Noption,option:e.target.value});
  }
  const optionAdded = (e) =>
  {
    dispatch(AddOptRequest({ ...Noption}))
   // history.push(`/AdminPoll`);
  }
  
  // React.useEffect(() => {
  //   if (newOptionState.isSuccess) {
  //      history.push(`/AdminPoll`);
  //   }
  // }, [newOptionState]);

  const[form,setform] =  useState(false);
   const add = () =>
   {
     setform(!form);
   }
  const saveChanges = ()=> {
    //code to check condition and then redirect
    history.push(`/AdminPoll`);

  }
  if (singlePollStatus.data != null) {
  return (
    <div>
      
      <Container
        className={classes.container}
        maxWidth="md"
        justifyContent="center"
      >
       <Grid container spacing={1}  justifyContent="space-between">
       <Grid item lg={5} md={5}>
        <TextField
          id="outlined-textarea"
          variant="outlined"
          defaultValue={singlePollStatus?.data?.data?.title}
          disabled={tfiled}
          className = {classes.title}
          onChange={setValue}
        />
        </Grid>
        {/* <div className={classes.icon}> */}
        <Grid item lg={5} md={5}>
         <IconButton onClick={(e)=>settfield(!tfiled)} >  
        <EditIcon/>
         </IconButton>
         <IconButton disabled={tfiled} onClick={TitleUpdate}>
           <DoneIcon color="primary"/>
           </IconButton> 
           {/* </div> */}
           </Grid>
       
           <Snackbar open={open} autoHideDuration={100} onClose={handleClose}
            message="title updated successfully"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
           >
        {/* <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}> */}
          {/* title updatad successfully
        </Alert> */}
         </Snackbar>

           </Grid>
           <hr></hr>
        {/* <Grid container direction={"row"} spacing={3}> */}
          {singlePollStatus?.data?.data?.options?.map(element => {
            return (
              <Grid container spacing={1}  justifyContent="space-between">
              <Grid item lg={5} md={5}>
              
                  <Paper className={classes.paper}>{element.option}</Paper>{" "}
                
                </Grid>
                <Grid item lg={5} md={5} >
                <IconButton onClick={()=>del_opt(element.option)}>
                  <DeleteIcon color="secondary"/>
                </IconButton>
                </Grid>
              </Grid>
            );
          })}
         <Grid item lg={5} md={5}>
              
              <Paper className={classes.paper}>
               <form>
                 <input type={form?"text":"hidden"} className={classes.newoption} onChange={setOption}></input>
               </form>
              </Paper>
              </Grid>
        <hr></hr>
        <div className={classes.last}>
          <IconButton>
          <DeleteIcon color="secondary"/>
          </IconButton>
          <span>
          <IconButton disabled={!form} onClick={optionAdded}>
          <DoneIcon color="primary"/>
          </IconButton>
          <IconButton onClick={add}>
          <AddIcon color="primary"/>
          </IconButton>
          <Button color="primary" onClick={saveChanges}>save</Button>
          </span>
           
        </div>
        
      </Container>
      </div>
    );
        }
        else{
          return(
            <h4>please wait</h4>
          );
        }
};
export default ViewPoll;


