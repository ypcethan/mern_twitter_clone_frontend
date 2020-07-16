import React, { useState } from "react";
import "./ProfileMediaSelection.scss";

const ProfileMediaSelection = () => {
    const [selected, setSelected] = useState("tweets");
    const handleClick = (e) => {
        setSelected(e.target.getAttribute("name"));
        console.log(selected);
    };
    return (
        <div className="media__selection__container">
            <div
                className={`media__selection__item ${selected === "tweets"
                    ? "media__selection__item--active"
                    : ""}`}
                name="tweets"
                onClick={handleClick}
            >
        Tweets
            </div>
            <div 
                className={`media__selection__item ${selected === "comments"
                    ? "media__selection__item--active"
                    : ""}`}
                name="comments"
                onClick={handleClick}
            >
        Tweets & Replies
            </div>
            <div 
                className={`media__selection__item ${selected === "media"
                    ? "media__selection__item--active"
                    : ""}`}
                name="media"
                onClick={handleClick}>
        Media
            </div>
            <div
            
                className={`media__selection__item ${selected === "likes"
                    ? "media__selection__item--active"
                    : ""}`}
                name="like"
                onClick={handleClick}>
        Likes
            </div>
        </div>
    );
};

export default ProfileMediaSelection;
