import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar(props) {
    const cookies = new Cookies();
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (cookies.get("jwt") === "logout") {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, []);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
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
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        DoForYou
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
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
                                to="/my-tasks"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                My Tasks
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/log-in"
                                className="nav-links-mobile"
                                onClick={closeMobileMenu}
                            >
                                Log in
                            </Link>
                        </li>
                    </ul>
                    <div>
                        {isLogin ? (
                            <>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            color: "#fff",
                                            marginRight: 20,
                                            fontWeight: 300,
                                        }}
                                    >
                                        username
                                    </div>
                                    <Button
                                        buttonStyle="btn--white"
                                        buttonSize="btn--medium-bold"
                                        onClick={() => {
                                            cookies.set("jwt", "logout");
                                            window.location.reload();
                                        }}
                                    >
                                        <div className="login-btn-link">
                                            Log out
                                        </div>
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <Button
                                buttonStyle="btn--white"
                                buttonSize="btn--medium-bold"
                            >
                                <Link to="/log-in" className="login-btn-link">
                                    Log in
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
