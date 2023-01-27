import React, {ChangeEvent, useEffect, useState} from 'react';
import avatar from "../assets/avatar.webp";
import SingleChat from "./SingleChat";
import {ChatInterface} from "../interfaces/ChatInterface";
import SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";
import UsernameModal from "./UsernameModal";

const sockjs = new SockJS("http://localhost:8080/websocket");
const stomp = Stomp.over(sockjs);
stomp.debug = () => {
};

const Chats = () => {
    const [message, setMessage] = useState<string>("");
    const [username,setUsername] = useState<string>("");
    const [connected, setConnected] = useState<boolean>(false);
    const [chats, setChats] = useState<Array<ChatInterface>>([]);

    useEffect(() => {
        setUsername(localStorage.getItem("username")!);
        stomp.connect({}, () => {
            setConnected(true);
            stomp.subscribe("/receiver", (message) => {
                const newChat: ChatInterface = JSON.parse(message.body);
                setChats(prevChats => prevChats.concat(newChat));
            })
        });
    }, [])

    const sendMessage = () => {
        if (message.length > 0) {
            const chat : ChatInterface = {
                content : message,
                username : username
            }
            stomp.send("/app/message", {}, JSON.stringify(chat))
        }
        setMessage("");
    }

    return (
        <>
            <UsernameModal/>
            <div className="chats">
                <h1>{connected ? "En ligne en tant que : " + username : "Hors ligne"}</h1>
                <div className="messages">
                    {
                        chats.map((chat, index) => <SingleChat chat={chat} key={index} owner={chat.username === username ? "me" : "not-me"}/>)
                    }
                </div>
                <div className="send-message">
                    <img src={avatar} alt="avatar"/>
                    <input type="text" placeholder="Tapez un message"
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)} value={message}/>
                    <a onClick={sendMessage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Chats;