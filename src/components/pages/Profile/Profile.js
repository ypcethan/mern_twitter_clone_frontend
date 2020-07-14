import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import { getUser } from '../../../redux/user/userAction';
import './Profile.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const { userName } = useParams();
  useEffect(() => {
    dispatch(getUser(userName));
  }, []);
  return (
    <div className="profile__container">
      <ProfileHeader />
      <ProfileInfo />
    </div>
  );
};

export default Profile;
