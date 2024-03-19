
import { useState, useEffect, useContext } from 'react';
import Card from '../CardsList/Card';
import { CountContext } from '../../context/countContext';
import { useSelector } from 'react-redux';

export default function Favorite() {
    const [favoriteItems, setFavoriteItems] = useState([]);
    const {favoriteCount} = useContext(CountContext);
    const itemData = useSelector(state => state.products);

    useEffect(() => {
        const favoriteItemsFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteItems(favoriteItemsFromStorage);
    }, [favoriteCount]);

    return (
        <section className="favoritePages">
        <h2>Favorite</h2>
        <div className="favoriteItems item-container">
            {favoriteItems.map((article) => {
            const favoriteItemData = itemData.products.find((item) => item.article === article);
            if (favoriteItemData) {
                return <Card key={article} {...favoriteItemData} inFavorite />;
            }
            return null; 
            })}
        </div>
        </section>
    );
}

