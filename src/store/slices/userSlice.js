import { createSlice } from "@reduxjs/toolkit";

import { KEYS } from "../../config/constant";

const initialState = {
  userInfo: null,
  firstTimeUser: null,
  storeEmailOrOtp: null,
  locationEnable: false,
  notifictionStatus: false,
  userProfileDetails: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      // if (!state?.userInfo?.token || !state?.token) {
      //   AsyncStorage.removeItem(KEYS.USER_INFO);
      // }
    },

    setUserProfileDetail: (state, action) => {
      state.userProfileDetails = action.payload;
    },
    clearUser: (state) => {
      state.userInfo = null;
      state.firstTimeUser = null;
      state.storeEmailOrOtp = null;
      localStorage.removeItem(KEYS.USER_INFO);
    },
  },
});

export const {
  setUserInfo,
  clearUser,

  setUserProfileDetail,
} = userSlice.actions;

export default userSlice.reducer;
