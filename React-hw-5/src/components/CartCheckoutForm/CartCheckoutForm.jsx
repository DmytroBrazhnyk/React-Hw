import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import Modal from '../Modal/Modal';
import ModalClose from '../Modal/ModalClose';
import ModalHeader from '../Modal/ModalHeader';
import ModalBody from '../Modal/ModalBody';
import ModalFooter from '../Modal/ModalFooter';


const CartCheckoutForm = ({updateCart}) => {
    

    const [formData, setFormData] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    }
    const closeModal = () => {
        setModalVisible(false);
    }
    const confirmBuy = () => {
        console.log(formData); 
        closeModal();
        const purchasedItems = JSON.parse(localStorage.getItem('cart')) || [];
        console.log("Придбані товари:", purchasedItems);
        localStorage.removeItem('cart');
        updateCart();
    }

    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    age: '',
                    address: '',
                    phoneNumber: ''
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().required('Обов\'язкове поле'),
                    lastName: Yup.string().required('Обов\'язкове поле'),
                    age: Yup.number().required('Обов\'язкове поле').positive('Вік повинен бути додатнім числом').integer('Вік повинен бути цілим числом').min(18, 'Має бути 18 або більше років'),
                    address: Yup.string().required('Обов\'язкове поле'),
                    phoneNumber: Yup.string().required('Обов\'язкове поле').matches(/^\d{10}$/, 'Мобільний телефон повинен складатися з 10 цифр')
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        setFormData(values);
                        openModal();
                        setSubmitting(false);
                        resetForm();
                    }, 200);
                }}
            >
            <Form className="form-container">
                <div>
                    <label htmlFor="firstName">Імя:</label>
                    <Field type="text" id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component="div" className="error" />
                </div>
                <div>
                    <label htmlFor="lastName">Прізвище:</label>
                    <Field type="text" id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component="div" className="error" />
                </div>
                <div>
                    <label htmlFor="age">Вік:</label>
                    <Field type="number" id="age" name="age" />
                    <ErrorMessage name="age" component="div" className="error" />
                </div>
                <div>
                    <label htmlFor="address">Адреса доставки:</label>
                    <Field type="text" id="address" name="address" />
                    <ErrorMessage name="address" component="div" className="error" />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Мобільний телефон:</label>
                    <Field type="tel" id="phoneNumber" name="phoneNumber" />
                    <ErrorMessage name="phoneNumber" component="div" className="error" />
                </div>
                <button type="submit">Checkout</button>
            </Form>
        </Formik>

        {isModalVisible && (
                <Modal
                classNames={"BuyModal"}
                onClose={closeModal}
                isVisible={isModalVisible}
                >
                    <ModalClose onClick={closeModal} />
                    <ModalHeader>Підтвердження Покупки</ModalHeader>
                    <ModalBody>
                        <div>
                            <p>Імя: {formData.firstName}</p>
                            <p>Прізвище: {formData.lastName}</p>
                            <p>Вік: {formData.age}</p>
                            <p>Адреса доставки: {formData.address}</p>
                            <p>Мобільний телефон: {formData.phoneNumber}</p>
                        </div>
                    </ModalBody>
                    <ModalFooter
                        firstText={"Так"}
                        firstClick={confirmBuy}
                        secondaryText={"Ні"}
                        secondaryClick={closeModal}>
                    </ModalFooter>
                </Modal>
            )}
        </>
    );
}

export default CartCheckoutForm;