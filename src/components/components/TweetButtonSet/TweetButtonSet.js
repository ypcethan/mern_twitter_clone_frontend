import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
    faHeart,
    faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import "./TweetButtonSet.scss";
const TweetButtonSet = () => {
    return (
        <div className='tweet__buttons__container'>
            <FontAwesomeIcon icon={faComment} className="tweet__button__icon" />
            <FontAwesomeIcon icon={faHeart} className="tweet__button__icon" />
            <FontAwesomeIcon icon={faBookmark} className="tweet__button__icon" />
        </div>
    );
};

export default TweetButtonSet;
