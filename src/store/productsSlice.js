import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  currentProduct: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCurrentProduct(state, action) {
      state.currentProduct = action.payload;
    },
  },
});

export const { setProducts, setCurrentProduct } = productsSlice.actions;

export default productsSlice.reducer;
