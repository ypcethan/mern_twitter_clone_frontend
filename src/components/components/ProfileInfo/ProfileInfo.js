import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
} from '@fortawesome/free-regular-svg-icons';

import './ProfileInfo.scss';

const ProfileInfo = () => (

  <div className="profile__content__container">
    <div className="profile__image__container">
      Image
    </div>
    <div className="profile__content">
      Content
      <div className="profile__content__top">
        <div className="profile__content__avatar">
          Avatar
        </div>
        <button type="button" className="profile__content__setup__btn"> Set up profile</button>
      </div>
      <div className="profile__content__bottom">
        <div className="profile__content__name">Ethan Chen</div>
        <div className="profile__content__username">@ethanypc</div>
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
