import React,{useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "./ProfileInfo.scss";

const ProfileInfo = ({ user , authUser}) => {
    
  const [hasFollowed, setHasFollowed] = useState(authUser.follows.includes(user._id) );
  const canEdit = authUser._id === user._id;
  const handleFollow = async () => {
    const baseUrl = process.env.REACT_APP_BACKEND_URL;
    const targetUrl = baseUrl + `/v1/users/followed/${user._id}`;
    const response = await axios.post(targetUrl);
    console.log("Follows");
    console.log(response.data);
    if (response.data.action === "unfollow"){
      setHasFollowed(false);
    }
    else if (response.data.action === "follow"){
      setHasFollowed(true);
    }
  };

  return (

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
          { canEdit ? (

            <Link to="/profile/edit" className="profile__content__setup__btn"> Set up profile</Link>
          ): (
            <button className="profile__content__setup__btn" onClick={handleFollow} >
              {
                hasFollowed ? "Unfollow" : "Follow"
              }
            </button>  
          )
          } 
        </div>
        <div className="profile__content__bottom">
          <div className="profile__content__name">{user.name}</div>
          <div className="profile__content__username">
          @
            {user.userName}
          </div>
          <div className="profile__content__joindate">
            <FontAwesomeIcon icon={faCalendarAlt} className="profile__content__joinicon" />
          Joined &nbsp;
            {moment(user.createdAy).format("MMMM YYYY")  }
          </div>
          <div className="profile__content__follow">
            <div className="profile__content__follow__item">
              <span className="profile__content__follow__count">{user.follows.length}</span>
            Following
            </div>
            <div className="profile__content__follow__item">
              <span className="profile__content__follow__count">{user.followedBy.length}</span>
            Followers
            </div>
          </div>
        </div>
      </div>
    </div>
  );};

export default ProfileInfo;
