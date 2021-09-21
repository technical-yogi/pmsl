import { put, call } from "@redux-saga/core/effects";
import { listAllPollSuccess,listAllPollError} from "../actions/index";
import axios from "axios";

export function* listAllPoll() {
  let response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/list_polls?_page=1`
  );
  try {
    if (response && response.data) {
      yield put(listAllPollSuccess({ response: response.data }));
    } else {
      yield put(listAllPollError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(listAllPollError({ error: "Data not fetched" }));
  }
}
export default listAllPoll;