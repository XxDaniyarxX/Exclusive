import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductByCategory = createAsyncThunk(
   "products/getProductByCategory",
   async (category, thunkAPI) => {
      try {
         const res = await axios.get(`https://dummyjson.com/products/category/${category}`);

         return res.data.products

      } catch (error) {
         return thunkAPI.rejectWithValue(error.resonse.data.message || error.message);
      }
   }
)

const productSlice = createSlice({
   name: "products",
   initialState: {
      loading: false,
      categories: [],
      error: null
   },
   reducers: {},
   extraReducers: (builder) => {
      builder 
       .addCase(getProductByCategory.pending, (state) => {
         state.loading = true;
         state.error = false;
       })
       .addCase(getProductByCategory.fulfilled, (state, action) => {
         state.loading = false;
         state.categories = action.payload
       })
       .addCase(getProductByCategory.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload
       })
   }
     
})

export default productSlice.reducer