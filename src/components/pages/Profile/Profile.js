import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
} from '@fortawesome/free-regular-svg-icons';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import './Profile.scss';

const Profile = () => (
  <div className="profile__container">
    <ProfileHeader />
    <ProfileInfo />
  </div>
);

export default Profile;
