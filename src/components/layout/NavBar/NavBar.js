import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faHashtag, faEnvelope, faBookmark, faUser,
} from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss';

const NavBar = () => (
  <nav className="nav__container">
    <div className="nav__logo">Logo</div>
    <ul className="nav__list">
      <li className="nav__item nav__item--active">
        <FontAwesomeIcon icon={faHome} />
        <span className="nav__item__title">
          Home
        </span>
      </li>
      <li className="nav__item">
        <FontAwesomeIcon icon={faHashtag} />
        <span className="nav__item__title">
          Explore
        </span>
      </li>
      <li className="nav__item">
        <FontAwesomeIcon icon={faEnvelope} />
        <span className="nav__item__title">
          Messages
        </span>
      </li>
      <li className="nav__item">
        <FontAwesomeIcon icon={faBookmark} />
        <span className="nav__item__title">
          Bookmarks
        </span>
      </li>
      <li className="nav__item">
        <FontAwesomeIcon icon={faUser} />
        <span className="nav__item__title">
          Profile
        </span>
      </li>
    </ul>
    <div>
      Tweet
    </div>
  </nav>
);

export default NavBar;
