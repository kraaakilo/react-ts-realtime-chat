import React from 'react';
import avatar from "../assets/avatar.webp";
import {MessageProps, Owner} from "../types/MessageProps";

const SingleChat = (props : MessageProps) => {
    return (
        <div className={props.owner}>
            <div className="chat-content">
                {props.chat!.content}
            </div>
            <img src={avatar} alt="avatar"/>
        </div>
    );
};

export default SingleChat;