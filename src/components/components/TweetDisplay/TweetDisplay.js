import React from "react";
import moment from "moment";
import TweetButtonSet from "../TweetButtonSet/TweetButtonSet";
import "./TweetDisplay.scss";
const TweetDisplay = ({tweet}) => {
    const user = tweet.createdBy;
    return (
        <div className='tweet__display'>
            <div className='tweet__user__info__container'>
                <div className='tweet__user__icon'>
                    <img src={user.avatarUrl} alt=""/>
                </div>
                <div className='tweet__user__info'>
                    <div className='tweet__user__name'>{user.name}</div>
                    <div className='tweet__user__username'>@{user.userName}</div>
                </div>
               
            </div>
            <div className="tweet__content">
                {tweet.content}
            </div>
            <div className='tweet__published__time'>
                {moment(tweet.createdAt).format("h:mm a . MMMM Do, YYYY")}
            </div>
            <div className='tweet__likes'>
                {tweet.comments.length} Comments
            </div>
            <TweetButtonSet tweet={tweet}/>
        </div>
    );
};

export default TweetDisplay;
