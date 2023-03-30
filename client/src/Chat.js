import axios from "axios";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import io from "socket.io-client";

import Navbar from "./components/Navbar";

const socket = io.connect("http://localhost:8000");

function Chat() {
    const cookies = new Cookies();

    const [firstname, setFirstname] = useState("");
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    const [room, setRoom] = useState("");
    const [rooms, setRooms] = useState([]);

    const[isJoined, setIsJoined] = useState(false);

    // getting firstname for sending message
    useEffect(() => {
        setFirstname(cookies.get("firstname"));
        
        axios.get("http://localhost:8000/api/chat/rooms")
            .then(data => {
                setRooms(data.data.rooms);
            });
    }, []);

    useEffect(() => {
        socket.on("send_previous_messages", messages => {
            setMessages(messages.map(message => {
                return `${message.sender.firstname}: ${message.message}`;
            }));
        });
    }, [isJoined]);

    // getting messages sent by other users
    useEffect(() => {
        socket.on("retrieve_message", msg => {
            console.log(msg);
            setMessages([...messages, msg]);
        });
    }, [messages, socket]);
    
    return (
        <>
            <Navbar />
            {
                isJoined ?
                <>
                    <form onSubmit={e => {
                        e.preventDefault();
                        socket.emit("send_message", { roomId: room, firstname, message: text });
                        setMessages([...messages, `${firstname}: ${text}`]);
                        setText("");
                    }}>
                        <input type="text" onChange={e => {
                            setText(e.target.value);
                        }} value={text} />
                    </form>
                    {
                        messages.map(message => <><span>{message}</span><br /></>)
                    }
                </>
                :
                <>
                    <button onClick={() => {
                        axios.post("http://localhost:8000/api/chat/rooms")
                            .then(data => {
                                console.log(data.data);
                            });
                    }}>Create</button>
                    {rooms &&
                        rooms.map(room => <><span>{room._id}</span><br /></>)
                    }
                    <form onSubmit={e => {
                        e.preventDefault();
                        socket.emit("join_room", { roomId: room, firstname });
                        setIsJoined(true);
                    }}>
                        <input type="text" onChange={e => {
                            setRoom(e.target.value);
                        }} value={room} />
                    </form>
                </>
            }
        </>
    )
}

export default Chat;