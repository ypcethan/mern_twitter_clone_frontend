import React ,{useState}from "react";
import {useDispatch,useSelector} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
    faHeart,
    faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import TweetInput from "../TweetInput/TweetInput";
import {createComment,createLike} from "../../../redux/tweet/tweetAction";
import "./TweetButtonSet.scss";
   
const TweetButtonSet = ({tweet}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const user = useSelector(state=>state.auth.user);
    const dispatch = useDispatch();
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const submitComment = (data) => {
        dispatch(createComment(tweet._id,data));
    };
    const handleLike = () => {
        dispatch(createLike(tweet._id));
    };
    return (
        <div className='tweet__buttons__container'>
            <div
                className="tweet__button__icon__container" 
            >
                <FontAwesomeIcon 
                    icon={faComment}
                    onClick={openModal}
                    className="tweet__button__icon"
                /> 
                <span className='tweet__button__count'>
                    {tweet.comments.length}
                </span>
            </div>
            <div className="tweet__button__icon__container" >
                <FontAwesomeIcon 
                    icon={faHeart}
                    className="tweet__button__icon"
                    onClick={handleLike}
                /> 
                <span className='tweet__button__count'>
                    {tweet.likes.length}
                </span>
            </div>
            <div  className="tweet__button__icon__container" >
                <FontAwesomeIcon 
                    icon={faBookmark}
                    className="tweet__button__icon"
                /> 
                <span className='tweet__button__count'>
                    {tweet.comments.length}
                </span>
            </div>
            <ModalContainer modalIsOpen={modalIsOpen} closeModal={closeModal}>
                <TweetInput 
                    user={user} 
                    onSubmit={submitComment}
                    submitLabel="Reply"
                    placeHolder="Tweet your reply"
                    closeModal={closeModal}
                />
            </ModalContainer>
        </div>
    );
};

export default TweetButtonSet;
