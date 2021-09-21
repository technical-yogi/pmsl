import { put, call } from "@redux-saga/core/effects";
import { UpdatePollSuccess, UpdatePollError } from "../actions/index";
import axios from "axios";

export function* UpdateTl(action) {
  const {id,title} = action.payload;
  let response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/update_poll_title?id=${id}&title=${title}`
  );
  console.log(response.data,"updatetl");
  try {
    if (response && response.data) {
       console.log("condition satisfied");
      yield put(UpdatePollSuccess({ response: response.data }));
    } else {
      yield put(UpdatePollError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(UpdatePollError({ error: "Data not fetched" }));
  }
}
export default UpdateTl;