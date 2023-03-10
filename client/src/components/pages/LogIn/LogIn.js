import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./LogIn.css";
import Cookies from "universal-cookie";

function LogIn() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/users/login", {
                email,
                password,
            })
            .then((data) => {
                cookies.set("jwt", data.data.token, { path: "/" });
                cookies.set("firstname", data.data.user.firstname, { path: "/" });
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="login">
            <div className="nav-small">
                <div className="nav-small-left">
                    <i className="fa-solid fa-arrow-left fa-2x" />
                    <Link to="/" className="back-to-main" id="btn-register">
                        BACK
                    </Link>
                </div>
                <div className="nav-small-right">
                    <Link
                        to="/register"
                        className="go-to-another-step"
                        id="btn-register"
                    >
                        CREATE ACCOUNT
                    </Link>
                </div>
            </div>

            <div className="login-container">
                <div className="login-wrapper">
                    <div className="login-wrapper-left">
                        <div className="login-image">
                            <div className="login-image-box">
                                <img
                                    className="login-image-png"
                                    src={
                                        process.env.PUBLIC_URL +
                                        "images/process.png"
                                    }
                                    alt="main"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="login-wrapper-right">
                        <div className="login-wrapper-outline">
                            <div className="login-content">
                                <div className="login-title">
                                    <h1>Log in</h1>
                                </div>
                                <div className="login-form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="login-input-field">
                                            <div className="login-input-label">
                                                Email
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="name@example.com"
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="login-input-field">
                                            <div className="login-input-label">
                                                Password
                                            </div>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="login-submit">
                                            <button
                                                type="submit"
                                                className="btn-login"
                                            >
                                                LOG IN
                                            </button>
                                        </div>
                                    </form>
                                    <div className="login-bottom">
                                        <Link
                                            to="/forgot-password"
                                            className="login-bottom-link"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LogIn;
