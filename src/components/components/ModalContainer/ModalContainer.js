import Modal from "react-modal";
import React from "react";
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
            style={customStyles}
            contentLabel="Example Modal"
        >

            <button onClick={closeModal}>close</button>
            {children}
        </Modal>
    );
};

export default ModalContainer;

   