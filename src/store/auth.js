import { createSlice } from "@reduxjs/toolkit";
const initialToken = localStorage.getItem("token");
const userIsLoggedIn = !!initialToken;
const initialAuthState = { isAuthenticated: userIsLoggedIn };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, token, email) {
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
