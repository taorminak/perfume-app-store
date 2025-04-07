import './ProductExplorer.css';
import React, { useState } from 'react';
import Products from '../Products/Products';
import ProductDetails from '../ProductDetails/ProductDetails';
import SearchInput from '../SearchInput/SearchInput';
import { useSelector } from 'react-redux';

const Loader = () => <div className="loader"></div>;

const ProductExplorer = (props) => {
  const selectedItem = useSelector((state) => state.products.currentProduct);
  const [loading, setLoading] = useState(false);

  const handleSearch = (newSearchTerm) => {
    localStorage.setItem('searchTerm', newSearchTerm);
  };

  return (
    <div className="main-container">
      <div className="search-parts">
        {selectedItem ? (
          <ProductDetails />
        ) : (
          <>
            <SearchInput
              placeholder={props.placeholder}
              onSearch={handleSearch}
            />
            {loading ? <Loader /> : <Products />}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductExplorer;
