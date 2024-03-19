
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CardsList from './components/CardsList/CardsList';
import Cart from './components/Pages/Cart';
import Favorite from './components/Pages/Favorite';
import { CountContext } from './context/countContext';

import { fetchProducts } from './redux/product/productActions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const favoriteItems = JSON.parse(localStorage.getItem('favorites')) || [];

    setCartCount(cartItems.length);
    setFavoriteCount(favoriteItems.length);
  }, [cartCount ,favoriteCount]);

  

  return (
      <Router>
        <CountContext.Provider value={{ cartCount, setCartCount, favoriteCount, setFavoriteCount }}>
          <Header 
          ></Header>
          <Routes>
            <Route
              path="/"
              element={
                <Main>
                  <CardsList
                    classNames={"productsList"}
                  />
                </Main>
              }
              />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/favorites" element={<Favorite/>} />
          </Routes>
        </CountContext.Provider>
      </Router>
  );
}

export default App
