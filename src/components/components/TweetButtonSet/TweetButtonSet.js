import React ,{useState}from "react";
import {useDispatch,useSelector} from "react-redux";
import axios from "axios"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as fasHeart,
} from "@fortawesome/free-solid-svg-icons";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import TweetInput from "../TweetInput/TweetInput";
import {createComment,createLike} from "../../../redux/tweet/tweetAction";
import "./TweetButtonSet.scss";
   
const TweetButtonSet = ({tweet}) => {
  const [modalIsOpen,setIsOpen] = useState(false);
  const [commentsCount, setCommentsCount] = useState(tweet.comments.length);
  const [likesCount , setLikesCount] = useState(tweet.likedBy.length);
  const user = useSelector(state=>state.auth.user);
  const [userLiked, setUserLiked] = useState(tweet.likedBy.includes(user._id));
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
    const backEnd = process.env.REACT_APP_BACKEND_URL;
    const baseUrl = backEnd + "/v1/tweets";
    // dispatch(createLike(tweet._id));
    const response = await axios.post(`${baseUrl}/${tweet._id}/likes` );
    setUserLiked(response.data.tweet.likedBy.includes(user._id));
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
      <div className={`tweet__button__icon__container
            tweet__button__icon__container--heart ${userLiked ? "tweet__button__icon__container--heart--active" : "" }`} >
        <FontAwesomeIcon 
          icon={userLiked ? fasHeart : faHeart}
          className="tweet__button__icon
                    tweet__button__icon--heart"
          onClick={handleLike}
        /> 
        <span className='tweet__button__count
                '>
          {likesCount}
        </span>
      </div>
      {/* <div  className="tweet__button__icon__container
            tweet__button__icon__container--bookmark" >
        <FontAwesomeIcon 
          icon={faBookmark}
          className="tweet__button__icon
                    tweet__button__icon--bookmark"
        /> 
        <span className='tweet__button__count'>
          {tweet.comments.length}
        </span>
      </div> */}
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
