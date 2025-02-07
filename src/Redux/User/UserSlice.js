import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(`https://dummyjson.com/users`)
             if (res.status === 200) return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.users;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
})

export default userSlice.reducer;