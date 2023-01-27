import React from 'react';
import avatar from "../assets/avatar.webp";

const ActiveUserItem = () => {
    return (
        <li className="active-user">
            <div>
                <img src={avatar} alt=""/>
                <div className="details">
                    <h4 className="username">Name</h4>
                </div>
            </div>
        </li>
    );
};

export default ActiveUserItem;