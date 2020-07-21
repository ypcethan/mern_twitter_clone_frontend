import React from "react";
import "./AvatarList.scss";

const AvatarList = ({users}) => {
  return (
    <div>
      <ul className='avatar__followed__list'>
        { users.map(user=> 
          <div 
            className='avatar__followed__item__container'
            key={user._id}> 
            <div className='avatar__followed__avatar'>
              <img src={user.avatarUrl} alt=""/>
            </div>
            <div className={"avatar__followed__info"}>
              <div className="avatar__followed__name"> 
                {user.name} 
              </div>
              <div className="avatar__followed__userName">{user.userName}</div>
            </div>
            <div>
                Follow
            </div>
          </div>
        )  }
      </ul> 
    </div>
  );
};

export default AvatarList;
