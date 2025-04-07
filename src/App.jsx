import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './pages/Layout';

const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;
