import PropTypes from 'prop-types';

export default function ModalWrapper ({ children, classNames, onClose}){

    const handleClick = (event) => {
        if (event.target.classList.contains('modal-wrapper')) {
            onClose();
        }
    };

    return(
        <div className={classNames} onClick={handleClick}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}

ModalWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    classNames : PropTypes.string,
    onClose: PropTypes.func,
    isVisible: PropTypes.bool.isRequired,
};