import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSmartphones = createAsyncThunk(
    'smartphones/fetchSmartphones',
    async (_, API) => {
        try {
            const res = await axios.get('https://dummyjson.com/products/category/smartphones')
            if (res.status === 200) return res.data
        } catch (error) {
            return API.rejectWithValue(error.message)
        }
    }
)

const smartphoneSlice = createSlice({
    name: 'smartphones',
    initialState: {
        loading: false,
        smartphones: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSmartphones.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSmartphones.fulfilled, (state, action) => {
                state.loading = false;
                state.smartphones = action.payload.products;
            })
            .addCase(fetchSmartphones.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export default smartphoneSlice.reducer;