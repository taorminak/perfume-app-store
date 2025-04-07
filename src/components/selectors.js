export const selectRemainingStock = (state, itemId) => {
  const item = state.products.products.find((product) => product.id === itemId);
  if (item) {
    const quantityInCart = state.cart.cartItems.reduce((total, item) => {
      if (item.id === itemId) {
        return total + item.quantityInCart;
      }
      return total;
    }, 0);
    return item.quantity - quantityInCart;
  }
  return 0;
};
