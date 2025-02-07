import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: 'gray',
  reducers: {
    changeColor: (state, action) => {
      return action.payload;
    }
  }
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;