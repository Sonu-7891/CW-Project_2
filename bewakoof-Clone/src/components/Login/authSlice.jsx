import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
  isLoggedIn: false,
};


const storedUser = JSON.parse(localStorage.getItem("user"));
if (storedUser) {
  initialState.phoneNumber = storedUser.phoneNumber;
  initialState.isLoggedIn = true;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    loginUser: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem(
        "user",
        JSON.stringify({ phoneNumber: state.phoneNumber })
      );
    },
    logoutUser: (state) => {
      state.phoneNumber = "";
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const { setPhoneNumber, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
