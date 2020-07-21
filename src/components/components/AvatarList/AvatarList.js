import React from "react";
import {useSelector} from "react-redux";
import FollowButton from "../../components/FollowButton/FollowButton";
import {Link} from "react-router-dom";
import "./AvatarList.scss";

const AvatarList = ({users}) => {
  const authUser = useSelector(state=>state.auth.user);
  return (
    <div>
      <ul className='avatar__followed__list'>
        { users.map(user=> 
          <div className='avatar__followed__item__container'  key={user._id}>
            <Link to={`/profile/${user.userName}`}  
              className='avatar__followed__item'
            > 
              <div className='avatar__followed__avatar'>
                <img src={user.avatarUrl} alt=""/>
              </div>
              <div className={"avatar__followed__info"}>
                <div className="avatar__followed__name"> 
                  {user.name} 
                </div>
                <div className="avatar__followed__userName">{user.userName}</div>
              </div>
            </Link>
            <div>

              <FollowButton user={user} authUser={authUser}/>
            </div>
          </div>
        )  }
      </ul> 
    </div>
  );
};

export default AvatarList;
