import { createSlice } from '@reduxjs/toolkit';

const wishSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addWish: (state, action) => {
      state.push(action.payload);
    },
    removeWish: (state, action) => {
      return state.filter(product => product.id !== action.payload.id);
    }
  }
});

export const { addWish, removeWish } = wishSlice.actions;

export default wishSlice.reducer;