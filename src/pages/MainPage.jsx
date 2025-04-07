import React from 'react';
import ProductExplorer from '../components/ProductExplorer/ProductExplorer';

const MainPage = () => {
  return (
    <div className="main-section">
      <ProductExplorer placeholder="Search for a product..." />
    </div>
  );
};

export default MainPage;
