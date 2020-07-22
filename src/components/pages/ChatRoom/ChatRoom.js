import React,{useState, useEffect,useRef} from "react";
import {useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import io from "socket.io-client";
import ChatHistory from "../../components/ChatHistory/ChatHistory";
import "./ChatRoom.scss";
let socket;

const ChatRoom = (props) => {
  const chatRoomContainerRef = useRef();
  const chatFormRef = useRef();
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
    // const server = "http://localhost:5000";
    const server = process.env.REACT_APP_BACKEND_ROOT;
    socket = io(server, {path:"/twitter/socket"});
    // socket = io(server);

    socket.emit("join" , {name, room}, (error)=> {
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
      scrollDown();
    });
  },[]);

  useEffect(()=> {

    if (focused) {
      chatFormRef.current.rows = 5;
    }else{

      chatFormRef.current.rows = 1;
    }
  }, [focused]);

  const scrollDown = () => {
    const scroll = chatRoomContainerRef.current.scrollHeight - 
    chatRoomContainerRef.current.clientHeight;  
    chatRoomContainerRef.current.scrollTo(0,scroll);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    socket.emit("sendMessage", {
      content,
      userName: user.userName,
      room,
      createdBy: user._id,
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
      <div className={`chat__room__container ${focused ? "chat__room__container--focus" : "chat__room__container--blur"}`} >
        <div  ref={chatRoomContainerRef} id='chat__history__box'
          className='chat__history__box'>
          <ChatHistory messages={messages} user={user} followedUser={followedUser}/>
        </div>
        <form 
          onSubmit={handleSubmit} 
          onFocus={()=>setFocused(true)}
          // onBlur={()=>setFocused(false)}
          className="chat__room__form" >
          <textarea 
            ref={chatFormRef}
            placeholder='Reply'
            type='text'
            className='chat__room__input'
            rows='1'
            value={content}
            onChange={e=> setContent(e.target.value )} />
          <div className='chat__room__form__submit__container'>
            <button 
              type='submit' className='chat__room__form__submit'>Reply</button>
          </div>
        </form>
      </div>
    </div>
  );};

export default ChatRoom;

