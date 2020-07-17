import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import TweetButtonSet from "../../components/TweetButtonSet/TweetButtonSet";
import "./TweetItem.scss";

const TweetItem = ({ tweet , hasButtonSet}) => (
    <div  className="tweet__item__container">
        <div className="tweet__item__avatar__container">
            <img src={tweet.createdBy.avatarUrl} alt="" />
        </div>
        <div className="tweet__item__content__container">
            <div>
                <div className="tweet__item__header">
                    <Link to={`/profile/${tweet.createdBy.userName}`} className="tweet__item__user">
                        {tweet.createdBy.name}
                    </Link>
                    <span className="tweet__item__username">
                        @{tweet.createdBy.userName}
                        <span className="dot">&#183;</span>
                        {moment(tweet.updatedAt, "YYYYMMDD").fromNow() }
                    </span>
                </div>

               
                <Link to={`/${tweet.createdBy.userName}/status/${tweet._id}`} 
                    className="tweet__item__content">{tweet.content}</Link>
            </div>
            {hasButtonSet && 
            <TweetButtonSet tweet={tweet} />
            }
        </div>
    </div>
);

export default TweetItem;
