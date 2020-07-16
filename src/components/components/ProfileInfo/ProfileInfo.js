import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
} from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

import './ProfileInfo.scss';

const BACKEND = process.env.REACT_APP_BACKEND_URL;
const ProfileInfo = ({ user }) => (

  <div className="profile__content__container">
    <div className="profile__image__container">
      {/* Image */}
      <img src={`${user.coverImageUrl}`} alt="" />
    </div>
    <div className="profile__content">
      <div className="profile__content__top">
        <div className="profile__content__avatar">
          {/* <img src="https://i.pravatar.cc/300" alt="" /> */}
          <img src={`${user.avatarUrl}`} alt="" />

        </div>
        <Link to="/profile/edit" className="profile__content__setup__btn"> Set up profile</Link>
      </div>
      <div className="profile__content__bottom">
        <div className="profile__content__name">{user.name}</div>
        <div className="profile__content__username">
          @
          {user.userName}
        </div>
        <div className="profile__content__joindate">
          <FontAwesomeIcon icon={faCalendarAlt} className="profile__content__joinicon" />
          Joined Novenber 2017
        </div>
        <div className="profile__content__follow">
          <div className="profile__content__follow__item">
            <span className="profile__content__follow__count">63</span>
            Following
          </div>
          <div className="profile__content__follow__item">
            <span className="profile__content__follow__count">3</span>
            Followers
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileInfo;
