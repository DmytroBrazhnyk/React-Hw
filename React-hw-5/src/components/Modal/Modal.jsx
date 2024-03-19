import PropTypes from 'prop-types';
import ModalWrapper from './ModalWrapper';

export default function Modal ({ children , classNames, onClose, isVisible}){
    return(
        <ModalWrapper
            classNames={`${classNames} modal-wrapper`}
            onClose={onClose}
            isVisible={isVisible}
        >
            {children}
        </ModalWrapper>
    ) 
}


Modal.propTypes = {
    children: PropTypes.node.isRequired,
    classNames : PropTypes.string,
    onClose: PropTypes.func,
    isVisible: PropTypes.bool.isRequired,
};