import React from 'react';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import './Profile.scss';

const Profile = () => (
  <div className="profile__container">
    <ProfileHeader />
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
          Button
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
