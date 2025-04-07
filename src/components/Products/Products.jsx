import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct, setProducts } from '../../store/productsSlice.js';
import ProductItem from '../ProductItem/ProductItem';
import localProducts from '../../../products.json';
import './Products.css';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const productsArray = localProducts.products;
    dispatch(setProducts(productsArray));
  }, [dispatch]);

  const handleClick = (item) => {
    dispatch(setCurrentProduct(item));
  };

  return (
    <div className="bottom-section">
      <div className="products__hero-container">
        <img
          className="products__hero"
          src="./src/resources/images/parfume-shop-banner.jpg"
          alt="banner"
        />
      </div>
      <ul className="products-container">
        {products.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
            onItemClick={() => handleClick(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
