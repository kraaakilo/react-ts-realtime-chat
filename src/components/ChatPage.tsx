import React from 'react';
import Chats from "./Chats";
import ActiveUserItem from "./ActiveUserItem";
const ChatPage = () => {
    return (
        <div className="container">
            <Chats/>
            <div className="side-chats">
                <div className="search-bar">
                    <div className="input-container">
                        <input type="text" placeholder="Search"/>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <ul className="active-users">
                    <ActiveUserItem/>
                </ul>
            </div>
        </div>
    );
};

export default ChatPage;