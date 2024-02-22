
import { useState,useEffect } from 'react';
import './App.scss'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CardsList from './components/CardsList/CardsList';

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
    <>
      <Header 
        cartCount={cartCount} 
        favoriteCount={favoriteCount}
      ></Header>
      <Main>
        <CardsList
          classNames={"productsList"}
          itemData={products}
          setFavoriteCount ={setFavoriteCount}
          setCartCount={setCartCount}
        >
        </CardsList>
      </Main>
    </>
  );
}

export default App
