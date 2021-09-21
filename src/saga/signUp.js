import { put, call } from "@redux-saga/core/effects";
import { signUpSuccess,signUpError } from "../actions/index";
//import { profileData } from "../../utils/profileData";
import axios from "axios";

export function* signUp(action) {
  const { username, password, role } = action.payload;
  let response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`
  );    
  try {
    if (response && response.data) {
      yield put(signUpSuccess({ response: response.data }));
    }
    else {
      yield put(signUpError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(signUpError({ error: "Data not fetched" }));
  }
}
export default signUp;
