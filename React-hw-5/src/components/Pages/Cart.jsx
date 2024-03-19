import { useState, useEffect, useContext } from 'react';
import Card from '../CardsList/Card';
import { CountContext } from '../../context/countContext';
import { useSelector } from 'react-redux';
import CartCheckoutForm from '../CartCheckoutForm/CartCheckoutForm';



export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const { cartCount } = useContext(CountContext);
    const itemData = useSelector(state => state.products);

    const updateCart = () => {
        const cartItemsFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cartItemsFromStorage);
    }

    useEffect(() => {
    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartItemsFromStorage);
    }, [cartCount]);

    return (
        <>
            {cartItems.length > 0 ? (
                <CartCheckoutForm updateCart={updateCart} />
            ) : (
                <section className="empty-cart">
                    <h2>Нажаль, кошик порожній</h2>
                </section>
            )}
            <section className="cartPages">
                <h2>Cart</h2>
                <div className="cartItems item-container">
                    {cartItems.length > 0 ? (
                        cartItems.map((article) => {
                            const cartItemData = itemData.products.find((item) => item.article === article);
                            if (cartItemData) {
                                return <Card key={article} {...cartItemData} inCart />;
                            }
                            return null;
                        })
                    ) : (
                        <p>Товарів у кошику немає</p>
                    )}
                </div>
            </section>
        </>
    );
}
