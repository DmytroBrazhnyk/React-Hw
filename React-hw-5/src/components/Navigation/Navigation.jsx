import PropTypes from 'prop-types';

export default function Navigation({ children }) {
    return (
        <nav className='navList'>
            {children}
        </nav>
    );
}

Navigation.propTypes = {
    children: PropTypes.node.isRequired,
};
