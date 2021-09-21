import * as action from "../constants";
import { fork, all, takeLatest } from "redux-saga/effects";
import {signUp} from "./signUp";
import {logIn} from "./logIn";
import {listAllPoll} from "./listAllPoll";
import {VotePoll} from "./VotePoll"
import {AddPoll} from "./AddPoll"
import {ViewPoll} from "./ViewPoll"
import UpdateTl from "./UpdateTl"
import AddOpt from "./AddOpt"
import DeleteOpt from "./DeleteOpt"
function* signUpBind() {
  yield takeLatest(action.SIGN_UP_REQUEST, signUp);
}
function* loginBind() {
  yield takeLatest(action.LOG_IN_REQUEST,logIn);
}
function* listAllPollBind() {
  yield takeLatest(action.LIST_ALL_POLL_REQUEST,listAllPoll);
}
function* VotePollBind() {
  yield takeLatest(action.VOTE_POLL_REQUEST,VotePoll);
}
function* AddPollBind() {
  yield takeLatest(action.ADD_POLL_REQUEST,AddPoll);
}
function* ViewPollBind() {
  yield takeLatest(action.VIEW_POLL_REQUEST,ViewPoll);
}
function* UpdateTlBind() {
  yield takeLatest(action.UPDATE_POLL_REQUEST,UpdateTl);
}
function* AddOptBind() {
  yield takeLatest(action.ADD_OPT_REQUEST,AddOpt);
}
function* DeleteOptBind() {
  yield takeLatest(action.DELETE_OPTION_REQUEST,DeleteOpt);
}

export default function* rootSaga() {
  yield all([fork(signUpBind),fork(loginBind),fork(listAllPollBind),fork(VotePollBind),fork(AddPollBind),fork(ViewPollBind),fork(UpdateTlBind),fork(AddOptBind),fork(DeleteOptBind)]);
}


