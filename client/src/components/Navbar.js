import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Button } from "./Button";
import "./Navbar.css";
import DropdownProfile from "./DropdownProfile";

function Navbar(props) {
    const cookies = new Cookies();
    const ref = useRef();

    const [click, setClick] = useState(false);
    const [navbarRight, setNavbarRight] = useState(true);
    const [firstname, setFirstname] = useState("");

    // Login
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (cookies.get("jwt") === "logout") {
            setIsLogin(false);
            setFirstname("");
        } else if (cookies.get("jwt") === undefined) {
            setIsLogin(false);
            setFirstname("");
        } else {
            setFirstname(cookies.get("firstname"));
            setIsLogin(true);
        }

        axios
            .get(
                `http://localhost:8000/api/chat/rooms/${cookies.get(
                    "firstname"
                )}`
            )
            .then((data) => {
                console.log(data.data);
            });
    }, []);

    // Close dropdown menu when the outside of the menu is clicked
    const [openProfile, setOpenProfile] = useState(false);
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (openProfile && ref.current && !ref.current.contains(e.target)) {
                setOpenProfile(false);
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [openProfile]);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 768) {
            setNavbarRight(false);
        } else {
            setNavbarRight(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-menu-left">
                        <Link
                            to="/"
                            className="navbar-logo"
                            onClick={closeMobileMenu}
                        >
                            DoForYou
                        </Link>
                    </div>
                    <div className="navbar-menu-center">
                        <div className="menu-icon" onClick={handleClick}>
                            <i
                                className={
                                    click
                                        ? "fa-solid fa-xmark"
                                        : "fa-solid fa-bars"
                                }
                            />
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link
                                    to="/create-new-task"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    Create New Task
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/find-tasks"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    Find Tasks
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/about-us"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                {isLogin ? (
                                    <div className="nav-menu-active-after-login">
                                        <hr />
                                        <div className="nav-menu-active-user">
                                            <div className="nav-menu-active-user-greet">
                                                Hello,
                                            </div>
                                            <div className="nav-menu-active-user-name">
                                                {firstname}
                                            </div>
                                        </div>
                                        <div className="nav-menu-active-user-menu">
                                            <ul className="nav-menu-active-user-menu-list">
                                                <li className="nav-menu-active-user-menu-list-item">
                                                    <Link to="/my-tasks-customer">
                                                        My Tasks
                                                    </Link>
                                                </li>
                                                <li className="nav-menu-active-user-menu-list-item">
                                                    <Link to="/my-account">
                                                        My Account
                                                    </Link>
                                                </li>
                                                <li className="nav-menu-active-user-menu-list-item">
                                                    <Link to="/my-reviews">
                                                        My Reviews
                                                    </Link>
                                                </li>
                                                <div className="nav-menu-active-user-menu-horizontal-line" />
                                                <li className="nav-menu-active-user-menu-list-item">
                                                    <Link to="/chat">Chat</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </li>
                            <li className="nav-item">
                                {isLogin ? (
                                    <Link
                                        to="/login"
                                        className="nav-links-mobile"
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
                                    </Link>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="nav-links-mobile"
                                        onClick={closeMobileMenu}
                                    >
                                        Log in
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                    {navbarRight && (
                        <div className="navbar-menu-right" ref={ref}>
                            {isLogin ? (
                                <>
                                    <div className="navbar-profile-box">
                                        <i class="fa-solid fa-user"></i>
                                        <button
                                            className="navbar-profile"
                                            onClick={() =>
                                                setOpenProfile((prev) => !prev)
                                            }
                                        >
                                            {firstname}
                                        </button>
                                        {openProfile && <DropdownProfile />}
                                    </div>
                                </>
                            ) : (
                                <Button
                                    /*buttonStyle="btn--white"*/
                                    buttonStyle="btn--secondary-dark"
                                    buttonSize="btn--medium-bold"
                                    buttonRadius="btn--rounded"
                                >
                                    <Link
                                        to="/login"
                                        className="login-btn-link"
                                    >
                                        Log in
                                    </Link>
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
