import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPrompts: null,
};

const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    userPrompts: (state, action) => {
      state.userPrompts = action.payload;
    },
  },
});

export default promptSlice.reducer;
export const { userPrompts } = promptSlice.actions;
