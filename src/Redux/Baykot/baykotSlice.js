import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const baykotFetch = createAsyncThunk(
    'baykot/baykotFetch',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('https://boykot.kg/api/v1/products/')
            if (res.status === 200) return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const baykotSlice = createSlice({
    name: 'baykot',
    initialState: {
        loading: false,
        products: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(baykotFetch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(baykotFetch.fulfilled, (state, action) => {
                state.loading = false; 
                state.products = action.payload.results;
            })
            .addCase(baykotFetch.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.payload;
            })
    }

})

export default baykotSlice.reducer