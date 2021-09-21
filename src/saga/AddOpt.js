import { put, call } from "@redux-saga/core/effects";
import { AddOptSuccess, AddOptError } from "../actions/index";
import axios from "axios";

export function* AddOpt(action) {
  const {id, option } = action.payload;
  console.log(action.payload,"addoption");
  let response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/add_new_option?id=${id}&option_text=${option}` 
  );
  try {
    if (response && response.data) {
      yield put(AddOptSuccess({ response: response.data }));
    } else {
      yield put(AddOptError({ error: "Data not fetched" }));
    }
  } catch (error) {  
    yield put(AddOptError({ error: "Data not fetched" }));
  }
}
export default AddOpt;