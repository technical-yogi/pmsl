import { put, call } from "@redux-saga/core/effects";
import { VotePollSuccess, VotePollError } from "../actions/index";
import axios from "axios";

export function* VotePoll(action) {
  const {id, optText } = action.payload;
  const token = localStorage.getItem("token");
  console.log(token,"asdf");
  const header = {access_token:token}
  let response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${optText}`,
    { },header
  );
  try {
    if (response && response.data) {
      yield put(VotePollSuccess({ response: response.data }));
    } else {
      yield put(VotePollError({ error: "Data not fetched" }));
    }
  } catch (error) {  
    yield put(VotePollError({ error: "Data not fetched" }));
  }
}
export default VotePoll;
