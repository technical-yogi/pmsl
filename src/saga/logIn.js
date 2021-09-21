import { put, call } from "@redux-saga/core/effects";
import { logInSuccess, logInError } from "../actions/index";
import axios from "axios";
import jwt from "jsonwebtoken";

export function* logIn(action) {
  const { username, password } = action.payload;
  let response = yield call(
    axios.get,
    `https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`
  );
  try {
    if (response && response.data) {
      yield put(logInSuccess({ response: response.data }));
      let user = jwt.verify(response.data.token, "jwt_tok");
      localStorage.setItem("userType" , user.role);
     
      localStorage.setItem("token", response.data.token);
    } else {
      yield put(logInError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(logInError({ error: "Data not fetched" }));
  }
}
export default logIn;
