import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'

import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Favorite from './pages/Favorite';
import Home from './pages/Home';

import { store } from './redux/store';

import './scss/style.scss'

function App() {
  const [openCart, setOpenCart] = useState(false)

  const onClickOpenCart = () => {
    setOpenCart(true)
  }

  return (
    <Provider store={store}>
      <div className="app">
        <div className="container">
          {
            openCart && <Cart onCloseCart={() => setOpenCart(false)} />
          }
          <Header openCart={onClickOpenCart} />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/favorites' element={<Favorite />} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider> 
  );
}

export default App;
