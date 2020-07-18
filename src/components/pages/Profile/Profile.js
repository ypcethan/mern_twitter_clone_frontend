import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
    const user = useSelector((state) => state.user.user);
    const tweets = useSelector(state=>state.tweet.tweets);
    const commentedTweets = useSelector((state)=> state.tweet.commentedTweets);
    const likedTweets = useSelector(state=>state.tweet.likedTweets);
    useEffect(() => {
        dispatch(getUser(userName));

    }, [userName]);
    useEffect(()=> {
        if(user){
            dispatch(getAllTweetsFromUser(user._id));
            dispatch(getAllUserComments(user._id));
            dispatch(getAllUserLikes(user._id));
        }
    },[user]);

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
    return (
        <div className="profile__container">
            <ProfileHeader />
            {user ? (
                <>
                    <ProfileInfo user={user} />
                    <ProfileMediaSelection setTab={setTab} selected={tab} />
                </>
            ) : "Loading"}
            {renderList()}
            {/* <TweetList tweets={tweets}/> */}
        </div>
    );
};

export default Profile;
