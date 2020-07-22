import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
// import { faImage } from "@fortawesome/free-regular-svg-icons";
import "./TweetInput.scss";

const TweetInput = ({user ,onSubmit , submitLabel, placeHolder, closeModal=null}) => {
  const [content, setContent] = useState("");
  const handleSubmit = () => {
    const tweetData = {
      content,
      createdBy: user._id
    };
    onSubmit(tweetData);
    setContent("");
    if (closeModal){
      closeModal();
    }
  };
  return (
    <div className="home__tweet__box">
      <div className="profile__icon">
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt="" />
        ) : (
          <FontAwesomeIcon icon={faUser} className="profile__icon--default" />
        )}
      </div>
      <div className="home__tweet__container">
        <input
          type="text"
          placeholder={placeHolder}
          className="home__tweet__input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="home__tweet__buttons">
          <div className="home__tweet__buttons__set">
            {/* <FontAwesomeIcon icon={faImage} className="home__tweet__icon" /> */}
          </div>
          <button
            className="home__tweet__submit"
            type="button"
            onClick={handleSubmit}
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
