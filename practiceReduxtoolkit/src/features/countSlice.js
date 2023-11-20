// countSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
}

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
  },
});

export const { incrementCount, decrementCount } = countSlice.actions;
export default countSlice.reducer;
