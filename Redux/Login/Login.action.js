import axios from "axios";
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from "./Login.actionType";

export const loginUserRequest = () => {
  return { type: LOGIN_USER_REQUEST };
};
export const loginUserSuccess = (payload) => {
  return { type: LOGIN_USER_SUCCESS, payload };
};
export const loginUserError = () => {
  return { type: LOGIN_USER_ERROR };
};

//

export const Loginwithweb = (loginData) => (dispatch) => {
  //   dispatch(loginUserRequest);
  axios
    .post("https://reqres.in/api/login", loginData)
    .then((res) => {
      localStorage.setItem("bug_tracker", JSON.stringify({ token: res.data }));
      localStorage.setItem("isAuth", JSON.stringify(true));
      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
    });
};
