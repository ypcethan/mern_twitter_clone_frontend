import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileMediaSelection from "../../components/ProfileMediaSelection/ProfileMediaSelection";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import TweetList from "../../components/TweetList/TweetList";
import { getUser } from "../../../redux/user/userAction";
import {getAllTweetsFromUser} from "../../../redux/tweet/tweetAction";
import "./Profile.scss";

const Profile = () => {
    const dispatch = useDispatch();
    const { userName } = useParams();
    const user = useSelector((state) => state.user.user);
    const tweets = useSelector(state=>state.tweet.tweets);
    useEffect(() => {
        dispatch(getUser(userName));
    }, [userName]);
    useEffect(()=> {
        if(user){
            dispatch(getAllTweetsFromUser(user._id));
        }
    },[user]);
    return (
        <div className="profile__container">
            {user ? (
                <>
                    <ProfileHeader />
                    <ProfileInfo user={user} />
                    <ProfileMediaSelection />
                    <TweetList tweets={tweets}/>
                </>
            ) : "Loading"}
        </div>
    );
};

export default Profile;
