import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
    faHeart,
    faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import "./TweetItem.scss";

const TweetItem = ({ tweet }) => (
    <Link to={`${tweet.createdBy.userName}/status/${tweet._id}`} className="tweet__item__container">
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

                <div className="tweet__item__content">{tweet.content}</div>
            </div>
            <div className="tweet__item__buttons">
                <FontAwesomeIcon icon={faComment} className="tweet__item__icon" />
                <FontAwesomeIcon icon={faHeart} className="tweet__item__icon" />
                <FontAwesomeIcon icon={faBookmark} className="tweet__item__icon" />
            </div>
        </div>
    </Link>
);

export default TweetItem;
