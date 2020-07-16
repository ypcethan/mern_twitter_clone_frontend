import React, { useState } from 'react';
import './ProfileMediaSelection.scss';

const ProfileMediaSelection = () => {
  const [selected, setSelected] = useState('');
  const handleClick = (e) => {
    setSelected(e.target.getAttribute('name'));
    console.log(selected);
  };
  return (
    <div className="media__selection__container">
      <div
        className={`media__selection__item ${selected === 'tweets'
          ? 'media__selection__item--active'
          : ''}`}
        name="tweets"
        onClick={handleClick}
      >
        Tweets
      </div>
      <div className="media__selection__item">
        Tweets & Replies
      </div>
      <div className="media__selection__item">
        Media
      </div>
      <div className="media__selection__item">
        Likes
      </div>
    </div>
  );
};

export default ProfileMediaSelection;
