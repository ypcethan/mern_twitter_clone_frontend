import React, { useState ,useEffect} from "react";
import AvatarList from "../../components/AvatarList/AvatarList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {useSelector, useDispatch} from "react-redux";
import {getUsers} from "../../../redux/user/userAction";

import "./SideBar.scss";

const SideBar = () => {
  const dispatch = useDispatch();
  const [searching, setSearching] = useState(false);

  const recommandedUsers = useSelector(state=>state.user.recommandedUsers);
  useEffect(() => {
    dispatch(getUsers()); 
  }, []);

  return (
    <div className="side-bar__container">
      <div className={`side-bar__search ${searching ? "side-bar__search--active" : ""}`}>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="Search tweet"
          className="side-bar__search__input"
          onFocus={() => setSearching(true)}
          onBlur={() => setSearching(false)}
        />
      </div>
      {/* <div className="side-bar__content__container">
        <div className="title">
          Trend for you
        </div>
        <ul className="side-bar__content__list">
          <li className="side-bar__content__item">Tweet 1</li>
          <li className="side-bar__content__item">Tweet 2</li>
          <li className="side-bar__content__item">Tweet 3</li>
        </ul>
      </div> */}
      <div className="side-bar__content__container">
        <div className="title">Who to follow</div>
        {recommandedUsers && <AvatarList users={recommandedUsers}/>}
      </div>
    </div>
  );
};

export default SideBar;
