import Modal from "react-modal";
import React from "react";
import "./ModalContainer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes
} from "@fortawesome/free-solid-svg-icons";
const customStyles = {
    content : {
        top                   : "50%",
        left                  : "50%",
        right                 : "auto",
        bottom                : "auto",
        marginRight           : "-50%",
        transform             : "translate(-50%, -50%)"
    }
};
Modal.setAppElement("#root");


const ModalContainer = ({modalIsOpen, closeModal ,children}) => {

    return (

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            // style={customStyles}
            contentLabel="Example Modal"
            className='modal'
            overlayClassName='modal__overlay'
            bac
        >
            <div className='modal__header'>
                
                <FontAwesomeIcon icon={faTimes}
                    onClick={closeModal} className='modal__close__btn' />
            </div>
            {children}
        </Modal>
    );
};

export default ModalContainer;

   