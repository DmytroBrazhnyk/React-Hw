
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavigationItem({ to, children }) {
    return (
        <h2 className='navItem'>
            <Link to={to}>{children}</Link>
        </h2>
    );
}

NavigationItem.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};