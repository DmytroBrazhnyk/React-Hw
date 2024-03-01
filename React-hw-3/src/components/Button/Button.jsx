import PropTypes from 'prop-types';

export default function Button({ type, classNames, onClick, children }){

    return (
        <button
            type={type}
            className={classNames}
            onClick={onClick}
        >
        {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']), 
    classNames: PropTypes.string, 
    onClick: PropTypes.func, 
    children: PropTypes.any,
}

