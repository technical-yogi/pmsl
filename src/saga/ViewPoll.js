import { put, call } from "@redux-saga/core/effects";
import { ViewPollSuccess, ViewPollError } from "../actions/index";
import axios from "axios";

export function* ViewPoll(action) {
  const id = action.payload;
  let response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/list_poll?id=${id}`
  );
  try {
    if (response && response.data) {
      yield put(ViewPollSuccess({ response: response.data }));
      console.log("viewpoll data gathered successully");
    } else {
      yield put(ViewPollError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(ViewPollError({ error: "Data not fetched" }));
  }
}
export default ViewPoll;
