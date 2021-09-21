import { combineReducers } from "redux";

import userData from "./username";

import userPwd from "./password";
import userRule from "./rule";
import signUp from "./signUp"
import logIn from "./logIn"
import listAllPoll from "./listAllPoll"
import VotePoll from "./votePoll"
import AddPoll from "./AddPoll"
import ViewPoll from "./ViewPoll"
import UpdateTl from "./UpdateTl"
import DeleteOpt from "./DeleteOpt"
import AddOpt from "./AddOpt"

const rootReducer = combineReducers({
   username:userData,
   password:userPwd,
   rule:userRule,
   api_state:signUp, 
   loginState:logIn,
   listAllPollState:listAllPoll,
   VotePollState:VotePoll,
   addPollStatus:AddPoll,
   ViewPollStatus:ViewPoll,
   TitlelUpdate:UpdateTl,
   DeleteOption:DeleteOpt,
   AddOption:AddOpt,
});

export default rootReducer;

