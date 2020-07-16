import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileMediaSelection from '../../components/ProfileMediaSelection/ProfileMediaSelection';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import { getUser } from '../../../redux/user/userAction';
import './Profile.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const { userName } = useParams();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(getUser(userName));
  }, [userName]);
  return (
    <div className="profile__container">
      {user ? (
        <>
          <ProfileHeader />
          <ProfileInfo user={user} />
          <ProfileMediaSelection />
        </>
      ) : 'Loading'}
    </div>
  );
};

export default Profile;
