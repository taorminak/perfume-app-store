import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === productToAdd.id,
      );

      if (existingProduct) {
        if (existingProduct.quantityInCart < existingProduct.quantity) {
          existingProduct.quantityInCart++;
        } else {
          console.log(`There are no more ${existingProduct.name} in stock`);
        }
      } else {
        state.cartItems.push({
          ...productToAdd,
          quantityInCart: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== productIdToRemove,
      );
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToIncrement = state.cartItems.find(
        (item) => item.id === itemId,
      );
      if (itemToIncrement) {
        const maxQuantity = itemToIncrement.quantity;
        if (itemToIncrement.quantityInCart < maxQuantity) {
          itemToIncrement.quantityInCart++;
        }
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToDecrement = state.cartItems.find(
        (item) => item.id === itemId,
      );
      if (itemToDecrement && itemToDecrement.quantityInCart > 1) {
        itemToDecrement.quantityInCart--;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
