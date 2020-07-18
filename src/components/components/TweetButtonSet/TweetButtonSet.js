import React ,{useState}from "react";
import {useDispatch,useSelector} from "react-redux";
import axios from "axios"; 
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
    const [commentsCount, setCommentsCount] = useState(tweet.comments.length);
    const [likesCount , setLikesCount] = useState(tweet.likes.length);
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
    const handleLike = async() => {
        const baseUrl = "http://localhost:5000/v1/tweets";
        // dispatch(createLike(tweet._id));
        const response = await axios.post(`${baseUrl}/${tweet._id}/likes` );

        setLikesCount(response.data.count);
    };
    return (
        <div className='tweet__buttons__container'>
            <div
                className="tweet__button__icon__container
                tweet__button__icon__container--comment
                " 
            >
                <FontAwesomeIcon 
                    icon={faComment}
                    onClick={openModal}
                    className="tweet__button__icon
                    tweet__button__icon--comment
                    "
                /> 
                <span className='tweet__button__count'>
                    {commentsCount}
                </span>
            </div>
            <div className="tweet__button__icon__container
            tweet__button__icon__container--heart" >
                <FontAwesomeIcon 
                    icon={faHeart}
                    className="tweet__button__icon
                    tweet__button__icon--heart"
                    onClick={handleLike}
                /> 
                <span className='tweet__button__count'>
                    {likesCount}
                </span>
            </div>
            <div  className="tweet__button__icon__container
            tweet__button__icon__container--bookmark" >
                <FontAwesomeIcon 
                    icon={faBookmark}
                    className="tweet__button__icon
                    tweet__button__icon--bookmark"
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
