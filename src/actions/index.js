import { createAction } from "redux-actions";
import * as constant from "../constants";

export const signUpRequest = createAction(constant.SIGN_UP_REQUEST);
export const signUpSuccess = createAction(constant.SIGN_UP_SUCCESS);
export const signUpError = createAction(constant.SIGN_UP_ERROR);

export const logInRequest = createAction(constant.LOG_IN_REQUEST);
export const logInSuccess = createAction(constant.LOG_IN_SUCCESS);
export const logInError = createAction(constant.LOG_IN_ERROR);

export const listAllPollRequest = createAction(constant.LIST_ALL_POLL_REQUEST);
export const listAllPollSuccess = createAction(constant.LIST_ALL_POLL_SUCCESS);
export const listAllPollError = createAction(constant.LIST_ALL_POLL_ERROR);

export const VotePollRequest = createAction(constant.VOTE_POLL_REQUEST);
export const VotePollSuccess = createAction(constant.VOTE_POLL_SUCCESS);
export const VotePollError = createAction(constant.VOTE_POLL_ERROR);

export const AddPollRequest = createAction(constant.ADD_POLL_REQUEST);
export const AddPollSuccess = createAction(constant.ADD_POLL_SUCCESS);
export const AddPollError = createAction(constant.ADD_POLL_ERROR);

export const ViewPollRequest = createAction(constant.VIEW_POLL_REQUEST);
export const ViewPollSuccess = createAction(constant.VIEW_POLL_SUCCESS);
export const ViewPollError = createAction(constant.VIEW_POLL_ERROR);

export const UpdatePollRequest = createAction(constant.UPDATE_POLL_REQUEST);
export const UpdatePollSuccess =  createAction(constant.UPDATE_POLL_SUCCESS);
export const UpdatePollError =  createAction(constant.UPDATE_POLL_ERROR);

export const AddOptRequest = createAction(constant.ADD_OPT_REQUEST);
export const AddOptSuccess = createAction(constant.ADD_OPT_SUCCESS);
export const AddOptError   = createAction(constant.ADD_OPT_ERROR);

export const DeleteOptRequest = createAction(constant.DELETE_OPTION_REQUEST);
export const DeleteOptSuccess =  createAction(constant.DELETE_OPTION_SUCCESS);
export const DeleteOptError =  createAction(constant.DELETE_OPTION_ERROR);






