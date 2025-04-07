import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartModal.css';
import QuantityControl from './QuantifyControl/QuantityControl';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from '../../store/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const modalRef = useRef(null);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.quantityInCart * item.price;
    });
    return totalPrice.toFixed(2);
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    onClose();
    dispatch(clearCart());
    alert('Thank you for your purchase!');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`cart-modal ${isOpen ? 'open' : ''}`} ref={modalRef}>
      <div className="cart-modal__content">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="cart__item">
                  <div className="cart__item-info-container">
                    <img
                      className="cart__item-img"
                      src={item.imageUrl}
                      alt={item.name}
                    />
                    <div className="cart__item-name-conatiner">
                      <div>
                        {item.name.length > 30
                          ? `${item.name.substring(0, 30)}`
                          : item.name}
                      </div>
                      <div className="cart__item-description">
                        {item.description.length > 30
                          ? `${item.description.substring(0, 30)}...`
                          : item.description}
                      </div>
                      <div className="cart__item-price">${item.price}</div>
                    </div>
                  </div>

                  <QuantityControl
                    quantity={item.quantityInCart}
                    onIncrement={() => handleIncrement(item.id)}
                    onDecrement={() => handleDecrement(item.id)}
                  />

                  <button
                    className="cart__item-trash-icon"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart__total">
              Total price: ${calculateTotalPrice()}
            </div>
            <button className="cart__checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
