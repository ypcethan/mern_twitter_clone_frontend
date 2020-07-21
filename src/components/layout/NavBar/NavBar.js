import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHashtag,
  faEnvelope,
  faBookmark,
  faUser,
  faFeather,
  faDove,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/auth/authAction";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import TweetInput from "../../components/TweetInput/TweetInput";
import {createTweet} from "../../../redux/tweet/tweetAction";
import "./NavBar.scss";

const NavBar = () => {
  const [modalIsOpen,setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const onLogOut = () => {
    dispatch(logout());
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const submitTweet = (data) => {
    dispatch(createTweet(data));
  };
  const authLinks = (
    <>
      <ul className="nav__list">
        <li className="nav__item nav__item--active">
          <Link to="/" className="nav__item__link">
            <FontAwesomeIcon icon={faHome} />
            <span className="nav__item__title">
                    Home
            </span>
          </Link>
        </li>
        {/* <li className="nav__item">
          <Link to="/explore" className="nav__item__link">
            <FontAwesomeIcon icon={faHashtag} />
            <span className="nav__item__title">Explore</span>
          </Link>
        </li> */}
        <li className="nav__item">
          <Link to="/messages" className="nav__item__link">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="nav__item__title">Messages</span>
          </Link>
        </li>
        {/* <li className="nav__item">
          <Link to="/bookmarks" className="nav__item__link">
            <FontAwesomeIcon icon={faBookmark} />
            <span className="nav__item__title">Bookmarks</span>
          </Link>
        </li> */}
        <li className="nav__item">
          <Link to={`/profile/${user ? user.userName : ""}`} className="nav__item__link">
            <FontAwesomeIcon icon={faUser} />
            <span className="nav__item__title">Profile</span>
          </Link>
        </li>
        <li className="nav__item">
          <button type="button" onClick={onLogOut} className="nav__item__link">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="nav__item__title">Log out</span>
          </button>
        </li>
      </ul>
      <button type="button" className="tweet__container"
        onClick={openModal}>
        <FontAwesomeIcon icon={faFeather} className="feather__icon" />
        <span className="tweet__title">Tweet</span>
      </button>
      <ModalContainer modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <TweetInput 
          user={user} 
          onSubmit={submitTweet}
          submitLabel="Tweet"
          placeHolder="What's happening?"
          closeModal = {closeModal}
        />
      </ModalContainer>
    </>
  );
  return (
    <nav className="nav__container">
      <div className="nav__logo">
        <FontAwesomeIcon icon={faDove} />
      </div>
      {user && authLinks}
    </nav>
  );
};

export default NavBar;
