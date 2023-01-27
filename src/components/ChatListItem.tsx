import React from 'react';
import avatar from "../assets/avatar.webp";

const ChatListItem = () => {
    return (
        <li className="chat-element">
            <div>
                <img src={avatar} alt=""/>
                <div className="chat-details">
                    <h4 className="sender-name">Name</h4>
                    <p>Hello</p>
                </div>
            </div>
            <div className="date">
                Just Now
            </div>
        </li>
    );
};

export default ChatListItem;