import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import Cookies from "universal-cookie";

function DropdownProfile() {
    const cookies = new Cookies();
    return (
        <div className="navbar-profile-dropdown">
            <ul className="profile-menu-list">
                <li className="profile-menu-list-item">
                    <Link to="/my-tasks-customer">My Tasks</Link>
                </li>
                <li className="profile-menu-list-item">
                    <Link to="/my-account">My Account</Link>
                </li>
                <li className="profile-menu-list-item">
                    <Link to="/my-reviews">My Reviews</Link>
                </li>
                <hr />
                <li className="profile-menu-list-item">
                    <div className="profile-chat-section">
                        <div className="profile-chat-link">
                            <Link to="/chat">Chat</Link>
                        </div>
                        <div className="profile-alert">
                            <i class="fa-solid fa-beat profile-alert-num fa-xs fa-2" />
                        </div>
                    </div>
                </li>
                <li className="profile-menu-list-item-logout">
                    <Button
                        buttonStyle="btn--secondary-dark"
                        buttonSize="btn--small-wide-bold"
                        onClick={() => {
                            cookies.set("jwt", "logout", {
                                path: "/",
                            });
                            cookies.remove("firstname", {
                                path: "/",
                            });
                            window.location.reload();
                        }}
                    >
                        Log out
                    </Button>
                </li>
            </ul>
        </div>
    );
}

export default DropdownProfile;
