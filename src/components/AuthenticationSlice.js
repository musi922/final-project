import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  userData: {},
  error: "",
};

export const authSlice = createSlice({
  name: "a",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    token: (state, action) => {
      state.token = action.payload;
    },
    loginError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const loginUser = (data, navigateCallback) => (dispatch) => {
  axios({
    method: "POST",
    url: 'https://new-generation-wgs8.onrender.com/Student/login',

    data: data,
  })
    .then((res) => {
      console.log(res);
      dispatch(token(res.data.token));
      localStorage.setItem("token", res.data.token);
      dispatch(login(res.data.data));

      const user = res.data;

      if (user.role === "admin") {
        navigateCallback("/dashboard");
      } else {
        navigateCallback("/");
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginError(err.response.data.message));
    });
};

export const { login, token, loginError } = authSlice.actions;
export default authSlice.reducer;
