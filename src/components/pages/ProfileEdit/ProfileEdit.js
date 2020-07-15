import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, clearError } from '../../../redux/auth/authAction';
import { setAlert } from '../../../redux/alert/alertAction';
import './ProfileEdit.scss';

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [userName, setUserName] = useState(userData.userName);
  const [avatar, setAvatar] = useState();
  const [coverImage, setCoverImage] = useState(userData.avatar);

  const onSubmitFrom = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (avatar) {
      formData.append('avatar', avatar);
    }
    if (coverImage) {
      formData.append('coverImage', coverImage);
    }
    formData.append('name', name);
    formData.append('userName', userName);
    formData.append('email', email);
    formData.append('id', userData._id);
    dispatch(updateUser(formData, userData._id));
  };

  useEffect(() => {
    if (error) {
      dispatch(setAlert(error, 'danger'));
      dispatch(clearError());
    }
  }, [error]);

  return (
    <div className="profile__edit__container">
      <div className="profile__edit">
        <h3 className="profile__edit__title">Edit profile</h3>
        <div className="profile__edit__form__container">
          <form className="profile__edit__form" onSubmit={onSubmitFrom}>
            <label htmlFor="name" className="profile__edit__input__label">Name</label>
            <input
              className="profile__edit__input"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className="profile__edit__input__label">Email</label>
            <input
              className="profile__edit__input"
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="username" className="profile__edit__input__label">User name</label>
            <input
              className="profile__edit__input"
              type="text"
              name="username"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="avatar" className="profile__edit__input__label">Avatar</label>
            <input
              className="profile__edit__input"
              type="file"
              name="avatar"
              id="avatar"
              onChange={(e) => { setAvatar(e.target.files[0]); }}
            />
            <label htmlFor="coverImage" className="profile__edit__input__label">Cover Image</label>
            <input
              className="profile__edit__input"
              type="file"
              name="coverImage"
              id="coverImage"
              onChange={(e) => { setCoverImage(e.target.files[0]); }}
            />
            <button type="submit" className="profile__edit__submit__btn">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
