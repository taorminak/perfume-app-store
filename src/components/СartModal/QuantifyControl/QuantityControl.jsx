import React from 'react';
import './QuantifyControl.css';

const QuantityControl = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div className="quantity-control">
      <div className="quantity-control__quantity">{quantity}</div>
      <div className="quantity-control__buttons">
        <button className="quantity-control__button" onClick={onIncrement}>
          +
        </button>
        <button className="quantity-control__button" onClick={onDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default QuantityControl;
