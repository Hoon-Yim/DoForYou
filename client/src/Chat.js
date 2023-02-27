import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8000");

function Chat() {
    const cookies = new Cookies();

    const [firstname, setFirstname] = useState("");
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);

    // getting firstname for sending message
    useEffect(() => {
        setFirstname(cookies.get("firstname"));
    }, []);



    // getting messages sent by other users
    useEffect(() => {
        socket.on("message", msg => {
            console.log(msg);
            setMessages([...messages, msg]);
        });
    }, [messages]);
    
    return (
        <>
            <form onSubmit={e => {
                e.preventDefault();
                socket.emit("message", { firstname, message: text });
                setText("");
            }}>
                <input type="text" onChange={e => {
                    setText(e.target.value);
                }} value={text} />
            </form>

            {
                messages.map(message => <><span>{message}</span><br/></>)
            }
        </>
    )
}

export default Chat;