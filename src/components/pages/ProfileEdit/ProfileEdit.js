import React from 'react';
import './ProfileEdit.scss';

const ProfileEdit = () => (
  <div className="profile__edit__container">
    <div className="profile__edit">
      <h3 className="profile__edit__title">Edit profile</h3>
      <div className="profile__edit__form__container">
        <form className="profile__edit__form">

          <label htmlFor="name" className="profile__edit__input__label">Name</label>
          <input
            className="profile__edit__input"
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="email" className="profile__edit__input__label">Email</label>
          <input
            className="profile__edit__input"
            type="text"
            name="email"
            id="email"
          />
          <label htmlFor="username" className="profile__edit__input__label">User name</label>
          <input
            className="profile__edit__input"
            type="text"
            name="username"
            id="username"
          />
        </form>
      </div>
    </div>
  </div>
);

export default ProfileEdit;
