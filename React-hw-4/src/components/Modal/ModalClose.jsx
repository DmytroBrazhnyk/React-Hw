import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { setModalStatus } from '../../redux/modal/modalActions';

export default function ModalClose ({ onClick }) {

    // const dispatch = useDispatch();
    // const isCartModalVisible = useSelector((state) => state.modal.isCartModalVisible);
    // const toggleCartModal = () => {
    //     dispatch(setModalStatus(!isCartModalVisible));
    // };
    return(
        <button   
        className="modal-close" 
        onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30">
                <line x1="0" y1="0" x2="30" y2="30" stroke="gray" strokeWidth="3" />
                <line x1="30" y1="0" x2="0" y2="30" stroke="gray" strokeWidth="3" />
            </svg>
        </button>
    )
    
}

ModalClose.propTypes = {
    onClick: PropTypes.any,
};