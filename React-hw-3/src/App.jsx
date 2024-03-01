
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CardsList from './components/CardsList/CardsList';
import Cart from './components/Pages/Cart';
import Favorite from './components/Pages/Favorite';
import { CountContext } from './context/countContext';

function App() {

  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/beerList.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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
                    itemData={products}
                  />
                </Main>
              }
              />
            <Route path="/cart" element={<Cart itemData={products} />} />
            <Route path="/favorites" element={<Favorite itemData={products}/>} />
          </Routes>
        </CountContext.Provider>
      </Router>
  );
}

export default App
