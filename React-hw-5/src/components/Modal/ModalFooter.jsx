import PropTypes from 'prop-types';
import Button from '../Button/Button';

export default function ModalFooter({ firstText, secondaryText, firstClick, secondaryClick }){

    return(
        <div className="modal-footer">
            {firstText && (
            <Button onClick={firstClick}> {firstText} </Button>
            )}

            {secondaryText && (
            <Button onClick={secondaryClick}> {secondaryText} </Button>
            )}
        </div>
    )
}

ModalFooter.propTypes = {
    firstText: PropTypes.string,
    secondaryText: PropTypes.string,
    firstClick: PropTypes.func,
    secondaryClick: PropTypes.func,
};