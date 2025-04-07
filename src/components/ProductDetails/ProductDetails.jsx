import React from 'react';
import './ProductDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProduct } from '../../store/productsSlice';
import AddProductButton from '../AddProductButton/AddProductButton';
import { selectRemainingStock } from '../selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const currentProduct = useSelector((state) => state.products.currentProduct);
  const remainingStock = useSelector((state) =>
    selectRemainingStock(state, currentProduct.id),
  );

  if (!currentProduct) {
    return null;
  }

  return (
    <div className="details__container">
      <button
        className="close-button"
        onClick={() => dispatch(setCurrentProduct(null))}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
      <div className="details__img-container">
        <img
          className="details__img"
          src={currentProduct.imageUrl}
          alt={currentProduct.name}
        />
      </div>
      <div className="details__info-container">
        <p className="details__brand">{currentProduct.brand}</p>
        <p className="details__name">{currentProduct.name}</p>
        <p className="details__description">{currentProduct.description}</p>
        <div className="details__quantity__price-container">
          <p className="details__quantity">
            Currently in stock: {remainingStock}
          </p>
          <p className="details__price">${currentProduct.price}</p>
        </div>
        <AddProductButton product={currentProduct} />
      </div>
    </div>
  );
};

export default ProductDetails;
