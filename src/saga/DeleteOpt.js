import { put, call } from "@redux-saga/core/effects";
import { DeleteOptSuccess, DeleteOptError } from "../actions/index";
import { ViewPollSuccess, ViewPollRequest, ViewPollError } from "../actions/index";
import axios from "axios";

export function* DeleteOpt(action){
  const {id, optText } = action.payload;
  let response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/delete_poll_option?id=${id}&option_text=${optText}`
    );
  try {
    if (response && response.data) {
      yield put(DeleteOptSuccess({response:response.data}));
      yield put(ViewPollRequest(id));
    } else {
      yield put(DeleteOptError({ error: "Data not fetched" }));
    }
  } catch(error){
    yield put(DeleteOptError({ error: "Data not fetched" }));
  }
}
export default DeleteOpt;
