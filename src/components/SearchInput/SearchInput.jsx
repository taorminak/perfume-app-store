import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/searchSlice';
import { setCurrentProduct } from '../../store/productsSlice';
import './SearchInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({ placeholder, onSearch }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const products = useSelector((state) => state.products.products);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
    setSubmitted(true);
    onSearch(searchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onSearch(searchTerm);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.search__results')) {
      setSubmitted(false);
      dispatch(setSearchTerm(''));
    }
  };

  useEffect(() => {
    if (submitted) {
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [submitted, searchTerm]);

  const filteredProducts = products.filter((product) =>
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleProductClick = (product) => {
    dispatch(setCurrentProduct(product));
    setSubmitted(false);
    dispatch(setSearchTerm(''));
  };

  const productsToDisplay = submitted
    ? searchTerm
      ? filteredProducts
      : products
    : [];

  return (
    <div className="search__info">
      <form onSubmit={handleSubmit} className="search__form">
        <button type="submit" className="search__button">
          <FontAwesomeIcon icon={faSearch} className="search__icon" />
        </button>
        <div className="search__separator"></div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          className="search__input"
        />
      </form>
      {submitted && (
        <div className="search__results">
          {productsToDisplay.length === 0 ? (
            <p className="no-results">No products found.</p>
          ) : (
            <ul className="search__list">
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="search__item"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="search__item-info-container">
                    <img
                      className="search__item-img"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                    <div className="search__item-name-conatiner">
                      <div className="search__item-name">{product.brand}</div>
                      <div>{product.name}</div>
                    </div>
                  </div>

                  <div className="search__item-price">${product.price}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
