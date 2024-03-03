import PropTypes from 'prop-types';
import Card from './Card';
import { useSelector } from 'react-redux';

export default function CardsList({ classNames, children }) {
    const itemData = useSelector(state => state.products);
    return (
        <section className={classNames}>
        {itemData.products.map((item) => (
            <Card key={item.article} {...item} />
        ))}
        {children}
        </section>
    );
}

CardsList.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.node,
};