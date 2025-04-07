import cartReducer from './cartSlice';
import productsReducer from './productsSlice';
import searchReducer from './searchSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  products: productsReducer,
  search: searchReducer,
  cart: cartReducer,
});

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart.cartItems);
    localStorage.setItem('cartItems', serializedState);
  } catch (e) {
    console.warn('Could not save state', e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cartItems');
    if (serializedState === null) return undefined;
    return { cart: { cartItems: JSON.parse(serializedState) } };
  } catch (e) {
    console.warn('Could not load state', e);
    return undefined;
  }
};

const preloadedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
