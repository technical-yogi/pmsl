import { put, call } from "@redux-saga/core/effects";
import { AddPollSuccess,AddPollError} from "../actions/index";
import axios from "axios";

export function* AddPoll(action) {
  console.log(action,"saga payload");
    const {title,option1,option2,option3,option4 } = action.payload;
  let response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/add_poll?title=${title}&options=${option1}____${option2}____${option3}____${option4}`
  );
  try {
    if (response && response.data) {
      yield put(AddPollSuccess({ response: response.data }));
    } else {
      yield put(AddPollError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(AddPollError({ error: "Data not fetched" }));
  }
}