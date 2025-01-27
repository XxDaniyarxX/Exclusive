import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartlist: []
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cartlist.push(action.payload);
        }
    }
});

export const { addCart } = basketSlice.actions;
export default basketSlice.reducer;