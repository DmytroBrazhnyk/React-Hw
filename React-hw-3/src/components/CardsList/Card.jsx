import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { useState, useEffect, useContext } from 'react';
import Modal from '../Modal/Modal';
import ModalClose from '../Modal/ModalClose';
import ModalHeader from '../Modal/ModalHeader';
import ModalBody from '../Modal/ModalBody';
import ModalFooter from '../Modal/ModalFooter';
import { CountContext } from '../../context/countContext';

export default function Card({ name, price, image, article, color, inCart }){

    const {setCartCount, setFavoriteCount } = useContext(CountContext);
    const [isAddedToCart, setIsAddedToCart] = useState(inCart);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isCartModalVisible, setIsCartModalVisible] = useState(false);

    const toggleCartModal = () => {
        setIsCartModalVisible((prev) => !prev);
    };

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const favoriteItems = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsAddedToCart(cartItems.includes(article));
        setIsFavorite(favoriteItems.includes(article));
    }, [article]);

    const handleAddToCart = () => {
        setIsAddedToCart((prev) => !prev);
        updateLocalStorage('cart', article);
        toggleCartModal();
        setCartCount();
    };    
    const handleAddToFavorites = () => {
        setIsFavorite((prev) => !prev);
        updateLocalStorage('favorites', article);
        setFavoriteCount();
    };

    const updateLocalStorage = (key, value) => {
        const items = JSON.parse(localStorage.getItem(key)) || [];
        if (items.includes(value)) {
            const updatedItems = items.filter((item) => item !== value);
            localStorage.setItem(key, JSON.stringify(updatedItems));
        } else {
            const updatedItems = [...items, value];
            localStorage.setItem(key, JSON.stringify(updatedItems));
        }
    };

    return(
    <>
        <div id={article} className='card'>
            <img className='card_img' src={image} alt={name} />
            <div className='card_mainInfo'>
                <h2 className="card_mainInfo_name">{name}</h2>
                <p className="card_mainInfo_color">{color}</p>
                <h3 className="card_mainInfo_price">{price} ₴</h3>
            </div>
            <div className='card_btnList'>
                <Button
                    onClick={() => {
                        toggleCartModal();
                    }}
                    type='button'
                    classNames={`addToCart ${isAddedToCart ? 'added' : ''}`}
                    >
                    {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
                </Button>
                <Button
                    onClick={() => {
                        handleAddToFavorites();
                    }}
                    type='button'
                    classNames={`starBtn ${isFavorite ? 'active' : ''}`}
                >
                    ☆
                </Button>
            </div>
        </div>
        
        {isCartModalVisible && (
            <Modal
                classNames={"cartModal"}
                onClose={toggleCartModal}
                isVisible={isCartModalVisible}
            >
                <ModalClose onClick={toggleCartModal}/>
                <ModalHeader>
                    <h2>{isAddedToCart ? `Видалити ${name} з Кошика` : `Додати ${name} до Кошика`}</h2>
                    <p>{color}</p>
                </ModalHeader>
                <ModalBody>
                    <img className='catrModalImg' src={image} alt="" />
                </ModalBody>
                <ModalFooter
                    firstText={isAddedToCart ?"Видалити":"Додати"}
                    firstClick={handleAddToCart}
                    secondaryText={isAddedToCart ?"не видаляти":"не додавати"}
                    secondaryClick={toggleCartModal}
                >
                </ModalFooter>
            </Modal>
        )}
    </>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    inCart: PropTypes.bool,

};