import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { createTweet } from '../../../redux/tweet/tweetAction';
import './HomeTweetBox.scss';

const HomeTweetBox = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [content, setContent] = useState('');
  const submitTweet = () => {
    console.log('Click');
    dispatch(createTweet({
      content,
      createdBy: user._id,
    }));
  };
  return (
    <div className="home__tweet__box">
      <div className="profile__icon">
        {user.avatar ? (
          <img src={user.avatar} alt="" />
        ) : (
          <FontAwesomeIcon icon={faUser} />
        )}
      </div>
      <div className="home__tweet__container">
        <input
          type="text"
          placeholder="What's happening?"
          className="home__tweet__input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="home__tweet__buttons">
          <div className="home__tweet__buttons__set">
            <FontAwesomeIcon icon={faImage} className="home__tweet__icon" />
          </div>
          <button
            className="home__tweet__submit"
            type="button"
            onClick={submitTweet}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTweetBox;
