import PropTypes from 'prop-types';

export default function ModalHeader({ children }){

    return(
        <div className="modal-header">
            {children}
        </div>
    )
}

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
};