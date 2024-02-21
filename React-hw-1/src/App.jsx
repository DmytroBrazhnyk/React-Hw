
import { useState } from 'react';
import './App.scss'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal';
import ModalClose from './components/Modal/ModalClose';
import ModalHeader from './components/Modal/ModalHeader';
import ModalBody from './components/Modal/ModalBody';
import ModalFooter from './components/Modal/ModalFooter';

import imageSrc from './assets/933790.jpg';

function App() {

  const [firstModalVisible, setFirstModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);

  const toggleFirstModal = () => {
    setFirstModalVisible(prevState => !prevState ? true : false);
  };
  const toggleSecondModal = () => {
    setSecondModalVisible(prevState => !prevState ? true : false);
  };
  const addToFavorite = ()=>{
    console.log("add to favorite")
  }
  const deleteProduct = () =>{
    console.log("delete")
  }

  return (
    <>
      <Button
        onClick={toggleFirstModal}
        type={"button"}
        classNames={"firstModal"}
      >
        Open first modal
      </Button>
      <Button
        onClick={toggleSecondModal}
        type={"button"}
        classNames={"secondModal"}
      >
        Open second modal
      </Button>

      {firstModalVisible && (
        <Modal
          classNames={"firstModal"}
          onClose={toggleFirstModal}
          isVisible={firstModalVisible}
        >
          <ModalClose onClick={toggleFirstModal}/>
          <ModalHeader>
            <img src={imageSrc} alt="#" />
            <h2>Product Delete!</h2>
          </ModalHeader>
          <ModalBody>
            <p> By clicking the “Yes, Delete” button, Beer will be deleted.</p>
          </ModalBody>
          <ModalFooter
            firstText={"no, cancle"}
            firstClick={toggleFirstModal}
            secondaryText={"yes, delete"}
            secondaryClick={deleteProduct}
          >
          </ModalFooter>
        </Modal>
      )}

      {secondModalVisible &&(
        <Modal
            classNames={"secondModal"}
            onClose={toggleSecondModal}
            isVisible={secondModalVisible}
        >
          <ModalClose onClick={toggleSecondModal}/>
          <ModalHeader>
            <h2>Product Name is Beer</h2> 
          </ModalHeader>
          <ModalBody>
            <p> Beer - is favorite drinck in my citi</p>
          </ModalBody>
          <ModalFooter
            firstText={"add to favorite"}
            firstClick={addToFavorite}
          >
          </ModalFooter>
        </Modal>
      )} 
    </>
  );
}

export default App
