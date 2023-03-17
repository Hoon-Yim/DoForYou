import React from "react";
import { Link } from "react-router-dom";

function DropdownProfile() {
    return (
        <div className="navbar-profile-dropdown">
            <ul className="profile-menu-list">
                <li className="profile-menu-list-item">
                    <Link to="/my-tasks-customer">My Tasks</Link>
                </li>
                <li className="profile-menu-list-item">
                    <Link to="/my-profile">My Profile</Link>
                </li>
                <li className="profile-menu-list-item">
                    <Link to="/">My Reviews</Link>
                </li>
                <hr />
                <li className="profile-menu-list-item">
                    <Link to="/chat">Chat</Link>
                </li>
                <li className="profile-menu-list-item">
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </div>
    );
}

export default DropdownProfile;
