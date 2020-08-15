import React from 'react';
import Products from './components/products';
import Cart from './components/cart';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './styles.css';

export default function ShoppingCart() {
  const initialState = {
    categories: [],
    categoriesIsLoading: false,
    products: [],
  };

  const store = configureStore(initialState);
  return (
    <div>
      <Provider store={store}>
        <div className='App'>
          <h1>Shopping Cart</h1>
          <div className='content'>
            <div className='left-panel'>
              <Products />
            </div>
            <div className='right-panel'>
              <Cart />
            </div>
          </div>
        </div>
      </Provider>
    </div>
  );
}
