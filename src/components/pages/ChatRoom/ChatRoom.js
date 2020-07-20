import React,{useState, useEffect} from "react";
import {useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import io from "socket.io-client";
import ChatHistory from "../../components/ChatHistory/ChatHistory";
import {} from "../../../redux/user/userAction";
import "./ChatRoom.scss";

let socket;
const ChatRoom = (props) => {
  const followedUser = props.history.location.followedUser;
  const user = useSelector(state=>state.auth.user);
  const [focused, setFocused] = useState(false);
  const [content, setContent] = useState("");
  const [messages , setMessages] = useState([]);
  const { userTwoId} = useParams();
  const userOneId = user._id;

  let room;
  if (userOneId < userTwoId){
    room = userOneId + "__"+ userTwoId;
  }
  else{
    room = userTwoId + "__"+ userOneId;
  }
  const name = user.userName;
  useEffect(()=> {
    const server = "http://localhost:5000";
    socket = io(server);

    socket.emit("join" , {name, room}, (error)=> {
    //   console.log(name);
    //   console.log(room);
    //   console.log("join");
      if (error){
        alert(error);
      }
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  } , []);
  useEffect(()=> {
    socket.on("message", msg=> {
      if (Array.isArray(msg)){
        setMessages((message)=> [...message, ...msg]);
      }
      else{
        setMessages((message)=> [...message, msg]);
      }
    });
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", {
      content,
      userName: user.userName,
      room,
      createdBy: user._id
    });
    setContent("");
  };
  return (
    <div >
      <div className="title__container">
        <div className="page__title">
              Message
        </div>
      </div>
      <div className='chat__room__container' >
        <ChatHistory messages={messages} user={user} followedUser={followedUser}/>

        <form 
          onSubmit={handleSubmit} 
          className={`chat__room__form ${ focused ? "chat__room__form--active":"" }`}>
          <input 
            placeholder='Reply'
            type='text'
            value={content}
            className='chat__room__input'
            onBlur={()=>setFocused(false)}
            onFocus={()=>setFocused(true)}
            onChange={e=> setContent(e.target.value )} />
        </form>
      </div>
    </div>
  );};

export default ChatRoom;

