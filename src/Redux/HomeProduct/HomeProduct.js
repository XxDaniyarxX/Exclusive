import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const HomeFetch = createAsyncThunk(
    'home/fetchSlice',
    async (_, ThunkAPI) => {
        try {
            const res = await axios.get('https://dummyjson.com/products')

            return res.data

        } catch (error) {
            return ThunkAPI.rejectWithValue(error.message)
        }
    }
)

const HomeSlice = createSlice({
    name: 'home',
    initialState: {
        loading: false,
        home: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(HomeFetch.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(HomeFetch.fulfilled, (state, action) => {
                state.loading = false
                state.home = action.payload.products
            })
            .addCase(HomeFetch.rejected, (state) => {
                state.loading = false
                state.error = null
            })
    }
})
export default HomeSlice.reducer