import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileMediaSelection from "../../components/ProfileMediaSelection/ProfileMediaSelection";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import TweetList from "../../components/TweetList/TweetList";
import CommentList from "../../components/CommentList/CommentList";
import { getUser } from "../../../redux/user/userAction";
import {getAllTweetsFromUser, getAllUserComments,getAllUserLikes} from "../../../redux/tweet/tweetAction";
import "./Profile.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const { userName } = useParams();
  const [tab, setTab] = useState("tweets");
  const isLoading = useSelector(state=>state.tweet.loading);
  const user = useSelector((state) => state.user.user);
  const authUser = useSelector((state=> state.auth.user));
  const tweets = useSelector(state=>state.tweet.tweets);
  const commentedTweets = useSelector((state)=> state.tweet.commentedTweets);
  const likedTweets = useSelector(state=>state.tweet.likedTweets);
  useEffect(() => {
    dispatch(getUser(userName));
  }, []);
  useEffect(() => {
    dispatch(getUser(userName));
  }, [userName]);
  useEffect(()=> {
    if(user){
      switch(tab){
      case "tweets":
        dispatch(getAllTweetsFromUser(user._id));
        return;
      case "comments":
        dispatch(getAllUserComments(user._id));
        return;
      case "likes":
        dispatch(getAllUserLikes(user._id));
      }
    }
  },[user,tab]);


  const renderList = () => {
    switch(tab){
    case "tweets":
      return (
        <TweetList tweets={tweets}/>
      );
    case "comments":
      return (
        <CommentList tweets={commentedTweets} />
      );
    case "likes":
      return (
        <TweetList tweets={likedTweets} />
      );
    }
  };
  const spinner = (
    <div className='profile__spinner'>
      <MoonLoader
        size={50}
        color="#1B91DA"
      />
    </div>
  );
  return (
    <div className="profile__container">
      <ProfileHeader />
      {user ? (
        <>
          <ProfileInfo user={user} authUser={authUser}/>
          <ProfileMediaSelection setTab={setTab} selected={tab} />
        </>
      ) : "Loading"}
      {isLoading ? spinner : renderList()}
      {/* <TweetList tweets={tweets}/> */}
    </div>
  );
};

export default Profile;
