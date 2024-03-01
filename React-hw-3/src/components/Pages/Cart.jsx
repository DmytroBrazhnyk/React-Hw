import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '../CardsList/Card';
import { CountContext } from '../../context/countContext';

export default function Cart({itemData}) {
    const [cartItems, setCartItems] = useState([]);
    const { cartCount } = useContext(CountContext);

    useEffect(() => {
    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartItemsFromStorage);
    }, [cartCount]);

    return (
        <section className="cartPages">
            <h2>Cart</h2>
            <div className="cartItems item-container">
                {cartItems.map((article) => {
                const cartItemData = itemData.find((item) => item.article === article);
                if (cartItemData) {
                    return <Card key={article} {...cartItemData} inCart />;
                }
                return null; 
                })}
            </div>
        </section>
    );
}

Cart.propTypes = {
    itemData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            article: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        })
    ).isRequired,
};