import React from "react";
import formatTime from "../../../utils/formatTime";
import "./ChatHistory.scss";
const ChatHistory = ({messages ,user ,followedUser}) => {
 
  return (
    <div >
      {messages.map(m=> (
        <div
          className={`chat__response__container 
         chat__response__container--${m.createdBy===user._id ? "left": "right"}`} 
          key={m._id}
        >
          <div className='chat__response__avatar'>
            {m.createdBy===user._id ? (
              <img src={user.avatarUrl} alt=""/>
            ): (
              <img src={followedUser.avatarUrl} alt=""/>
            )}
          </div>
          <div className='chat__response__content__container'>
            <div className='chat__response__content
          '>
              {m.content}
            </div>
            <div className='chat__response__time'>
              {
                formatTime(m.createdAt)
              }
            </div>
          </div>
        </div>
      ))} 
    </div>
  );
};

export default ChatHistory;
