import React from 'react';
import './AddProductButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const AddProductButton = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleClick = () => {
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <button className="product__button" onClick={handleClick}>
      <FontAwesomeIcon className="product__button-icon" icon={faShoppingCart} />
      {isInCart ? 'Remove from cart' : 'Add to cart'}
    </button>
  );
};

export default AddProductButton;
