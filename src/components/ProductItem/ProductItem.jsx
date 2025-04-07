import React from 'react';
import './ProductItem.css';
import AddProductButton from '../AddProductButton/AddProductButton';
import { useSelector } from 'react-redux';
import { selectRemainingStock } from '../selectors';

const ProductItem = ({ item, onItemClick }) => {
  const remainingStock = useSelector((state) =>
    selectRemainingStock(state, item.id),
  );
  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <li className="product">
      <div onClick={() => onItemClick?.(item)}>
        <div className="product__img-container">
          <img className="product__img" src={item.imageUrl} alt={item.name} />
        </div>
        <div className="product__info-container">
          <p className="product__separator"></p>
          <p className="product__brand">{item.brand}</p>
          <p className="product__name">{item.name}</p>
          <div className="product__details">
            <p className="product__quantity">{remainingStock} in stock</p>
            <p className="product__price">${item.price}</p>
          </div>
        </div>
      </div>
      <AddProductButton product={item} onClick={handleButtonClick} />
    </li>
  );
};

export default ProductItem;
