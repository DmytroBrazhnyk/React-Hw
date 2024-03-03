import { useState, useEffect, useContext } from 'react';
import Card from '../CardsList/Card';
import { CountContext } from '../../context/countContext';
import { useSelector } from 'react-redux';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const { cartCount } = useContext(CountContext);
    const itemData = useSelector(state => state.products);

    useEffect(() => {
    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartItemsFromStorage);
    }, [cartCount]);

    return (
        <section className="cartPages">
            <h2>Cart</h2>
            <div className="cartItems item-container">
                {cartItems.map((article) => {
                const cartItemData = itemData.products.find((item) => item.article === article);
                if (cartItemData) {
                    return <Card key={article} {...cartItemData} inCart />;
                }
                return null; 
                })}
            </div>
        </section>
    );
}
