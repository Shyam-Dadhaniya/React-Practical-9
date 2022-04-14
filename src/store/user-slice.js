import { createSlice } from "@reduxjs/toolkit";
import { userReducer } from "../reducer/userReducer";

const userSlice = createSlice({
  name: "user",
  initialState: {
    file: null,
    name: "",
    email: "",
    phone: "",
    password: "",
    isAuth: false || JSON.parse(localStorage.getItem("user"))?.isAuth,
  },
  reducers: userReducer,
});
export const userAction = userSlice.actions
export default userSlice;
