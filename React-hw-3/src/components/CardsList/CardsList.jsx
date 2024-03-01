import PropTypes from 'prop-types';
import Card from './Card';

export default function CardsList({ classNames, itemData, children }){

    console.log(itemData);
    return(
        <section
        className={classNames}
        >
            {itemData.map((item) => (
                <Card key={item.article} {...item} 
                />
            ))}
            {children}
        </section>
    )
}

CardsList.propTypes = {
    classNames: PropTypes.string,
    itemData: PropTypes.array,
    children: PropTypes.node,
    setFavoriteCount: PropTypes.any,
    setCartCount: PropTypes.any
};