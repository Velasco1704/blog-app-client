import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateTypes } from "../interfaces/initialState.interface";
import { SessionTypes } from "../interfaces/session.interface";

const initialState: InitialStateTypes = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<SessionTypes>) => {
      state.user = action.payload;
    },
    logOutUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
