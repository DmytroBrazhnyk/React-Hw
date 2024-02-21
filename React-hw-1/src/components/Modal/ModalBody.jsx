import PropTypes from 'prop-types';

export default function ModalBody({children}){
    return(
        <div>
            {children}
        </div>
    )  
}

ModalBody.propTypes = {
    children: PropTypes.node.isRequired,
};