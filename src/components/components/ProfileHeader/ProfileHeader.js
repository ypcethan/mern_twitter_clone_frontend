import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import './ProfileHeader.scss';

const ProfileHeader = () => (
  <div className="profile__header">
    <Link to="/">
      <FontAwesomeIcon icon={faArrowLeft} className="profile__arrow__icon" />
    </Link>
    <div className="profile__title__container">
      <div className="profile__title">
        User name
      </div>
      <div className="profile__tweet__count">
        1 tweet
      </div>
    </div>
  </div>
);

export default ProfileHeader;
