import React,{useEffect,useState } from "react";
import {useSelector ,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {getFollowed} from "../../../redux/user/userAction";
import "./Message.scss";
const Messages = () => {
  const dispatch = useDispatch();
  const followedUsers = useSelector(state=>state.user.followedUsers);
  const [searchName, setSearchName] = useState("");
  const [listToRender, setListToRender] = useState(followedUsers);
  useEffect(()=> {
    dispatch(getFollowed());
  },[]);
  useEffect(()=> {
    if (searchName.length > 0){
      const re = new RegExp(`${searchName}`, "ig");
      setListToRender(followedUsers.filter(user=>user.name.match(re) || user.userName.match(re)));
    }
    else{
      setListToRender(followedUsers);
    }
  }, [searchName, followedUsers]);
  return (
    <div>
      <div className="title__container">
        <div className="page__title">
              Message
        </div>
      </div>
      <input type="text" value={searchName} onChange={e=>setSearchName(e.target.value)} placeholder='Search user'
        className='message__search'
      />
      <ul className='message__followed__list'>
        { listToRender.map(user=> 
          <Link 
            to={{
              pathname: `/messages/${user._id}` ,
              followedUser: user
            }
            }
            className='message__followed__item__container'
            key={user._id}> 
            <div className='message__followed__avatar'>
              <img src={user.avatarUrl} alt=""/>
            </div>
            <div className={"message__followed__info"}>
              <div className="message__followed__name"> 
                {user.name} 
              </div>
              <div className="message__followed__userName">{user.userName}</div>
            </div>
          </Link>
        )  }
      </ul>
    </div>
  );
};

export default Messages;
