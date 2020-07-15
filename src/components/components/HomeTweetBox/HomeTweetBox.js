import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import './HomeTweetBox.scss';

const HomeTweetBox = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="home__tweet__box">
      <div className="profile__icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="home__tweet__container">
        <input type="text" placeholder="What's happening?" className="home__tweet__input" />
        <div className="home__tweet__buttons">
          <div className="home__tweet__buttons__set">
            <FontAwesomeIcon icon={faImage} className="home__tweet__icon" />
          </div>
          <button className="home__tweet__submit" type="button">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTweetBox;
