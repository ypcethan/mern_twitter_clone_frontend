import React,{useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import io from "socket.io-client";

let socket;
const CharRoom = () => {
    // const [socket, setSocket] = useState("");
    // let socket;
    const [content, setContent] = useState("");
    const [messages , setMessages] = useState([]);
    const {userOneId, userTwoId} = useParams();

    const user = useSelector(state=>state.auth.user);
    const room = userOneId + "__"+ userTwoId;
    const name = user.userName;
    useEffect(()=> {
        const server = "http://localhost:5000";
        // setSocket(io(server )); 
        socket = io(server);

        socket.emit("join" , {name, room}, (error)=> {
            console.log(name);
            console.log(room);
            console.log("join");
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
            setMessages((message)=> [...message, msg]);
        });
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
        socket.emit("sendMessage", {
            content,
            name,
            room
        });
        setContent("");
    };
    return (
        <div>
            <div className="title__container">
                <div className="page__title">
              Message
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={content}
                    onChange={e=> setContent(e.target.value )}/>
            </form>
            {messages.map(m=> (
                <div> {m.user}, {m.text} </div> 
            ))}
        </div>
    );};

export default CharRoom;
