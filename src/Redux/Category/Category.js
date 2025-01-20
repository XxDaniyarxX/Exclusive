import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const category = createAsyncThunk(
  'category/fetchCategory',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('https://dummyjson.com/products/category-list')
      return res.data
    } catch (error) {
      thunkAPI.rejectWithValue(error.message)
    }
  }
)

const CategorySlice = createSlice({
  name: 'category',
  initialState: {
    loading: true,
    categories: [],
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(category.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(category.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload
        state.error = null
      })
      .addCase(category.rejected, (state) => {
        state.loading = false;
        state.error = null
      })
  }
})

export default CategorySlice.reducer