import React, { useState } from 'react';
import './Header.css';
import CartModal from '../../СartModal/CartModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProduct } from '../../../store/productsSlice';

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemCount = cartItems.length;

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="header">
      <NavLink
        className="nav__link"
        to="/"
        onClick={() => dispatch(setCurrentProduct(null))}
      >
        <img
          className="logo"
          src="./src/resources/images/logo_netconomy_neu_weisz.png"
          alt="netconomy logo"
        />
      </NavLink>
      <div className="nav__link cart__item-container">
        <FontAwesomeIcon icon={faShoppingCart} onClick={toggleCartModal} />
        {cartItemCount > 0 && (
          <span className="cart__item-count">{cartItemCount}</span>
        )}
      </div>
      <CartModal isOpen={isCartOpen} onClose={toggleCartModal} />
    </header>
  );
};

export default Header;
