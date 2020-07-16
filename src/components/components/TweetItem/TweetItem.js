import React from 'react';
import './TweetItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faHeart,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';

const TweetItem = () => (
  <div className="tweet__item__container">
    <div className="tweet__item__avatar__container">
      {/* <img src={tweet} alt=""/> */}
    </div>
    <div className="tweet__item__content__container">
      <div>
        <div className="tweet__item__header">
          <span className="tweet__item__user">
            name
          </span>
          <span className="tweet__item__username">
            @Username
            <span className="dot">&#183;</span>
            1h
          </span>
        </div>

        <div className="tweet__item__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at consequuntur a vitae cumque officia odit cupiditate temporibus, ad iusto voluptates sequi provident sapiente earum quibusdam ducimus maiores repellat placeat.</div>
      </div>
      <div className="tweet__item__buttons">
        <FontAwesomeIcon icon={faComment} className="tweet__item__icon" />
        <FontAwesomeIcon icon={faHeart} className="tweet__item__icon" />
        <FontAwesomeIcon icon={faBookmark} className="tweet__item__icon" />
      </div>
    </div>
  </div>
);

export default TweetItem;
