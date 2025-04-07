import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer/Footer';
import Header from '../components/layout/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
