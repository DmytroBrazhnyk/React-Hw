import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import Card from '../CardsList/Card';
import { CountContext } from '../../context/countContext';

export default function Favorite({ itemData }) {
    const [favoriteItems, setFavoriteItems] = useState([]);
    const {favoriteCount} = useContext(CountContext);

    useEffect(() => {
        const favoriteItemsFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteItems(favoriteItemsFromStorage);
    }, [favoriteCount]);

    return (
        <section className="favoritePages">
        <h2>Favorite</h2>
        <div className="favoriteItems item-container">
            {favoriteItems.map((article) => {
            const favoriteItemData = itemData.find((item) => item.article === article);
            if (favoriteItemData) {
                return <Card key={article} {...favoriteItemData} inFavorite />;
            }
            return null; 
            })}
        </div>
        </section>
    );
}

Favorite.propTypes = {
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