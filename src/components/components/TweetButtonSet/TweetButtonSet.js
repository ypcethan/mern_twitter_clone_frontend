import React ,{useState}from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
    faHeart,
    faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import TweetInput from "../TweetInput/TweetInput";
import "./TweetButtonSet.scss";
   
const TweetButtonSet = () => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const [content ,setContent] = useState("");
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className='tweet__buttons__container'>
            <FontAwesomeIcon 
                icon={faComment}
                className="tweet__button__icon"
                onClick={openModal}
            />
            <FontAwesomeIcon icon={faHeart} className="tweet__button__icon" />
            <FontAwesomeIcon icon={faBookmark} className="tweet__button__icon" />
            <ModalContainer modalIsOpen={modalIsOpen} closeModal={closeModal}>
                <h1>Hello</h1>
                <TweetInput />
            </ModalContainer>
        </div>
    );
};

export default TweetButtonSet;
