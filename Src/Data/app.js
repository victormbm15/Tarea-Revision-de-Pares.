import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import CartPage from './components/CartPage';

const AppContent = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  switch (currentPage) {
    case 'home':
      return <HomePage onNavigate={handleNavigate} />;
    case 'products':
      return <ProductsPage onNavigate={handleNavigate} />;
    case 'cart':
      return <CartPage onNavigate={handleNavigate} />;
    default:
      return <HomePage onNavigate={handleNavigate} />;
  }
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
