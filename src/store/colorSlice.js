import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currColor: '#FF6633',
};

const colorSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    setCurrentColor: (state, { payload }) => {
      state.currColor = payload;
    },
  },
});

export const { setCurrentColor } = colorSlice.actions;

export default colorSlice.reducer;
