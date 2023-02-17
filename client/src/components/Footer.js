import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div class="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <div class="footer-link-left">
                                <h1 className="logo">DoForYou</h1>
                                <h6 className="footer-text">
                                    Let us free you from worries
                                </h6>
                            </div>
                            <div class="footer-link-center">
                                <Link to="/create-new-task">
                                    Create New Task
                                </Link>
                                <Link to="/find-tasks">Find Tasks</Link>
                                <Link to="/become-performer">
                                    Do you wanna be Performer?
                                </Link>
                                <Link to="/">FAQ</Link>
                            </div>
                            <div class="footer-link-right">
                                <Link to="/" className="chat">
                                    <h4 className="footer-text">Let's Chat!</h4>
                                </Link>
                                <h5 className="footer-text">
                                    doforyou@doforyou.com
                                </h5>
                                <h5 className="footer-text">
                                    +1 (123) 456 7890
                                </h5>
                                <div class="social-icons">
                                    <Link
                                        class="social-icon-link instagram"
                                        to="/"
                                        target="_blank"
                                        aria-label="Instagram"
                                    >
                                        <i class="fab fa-instagram" />
                                    </Link>
                                    <Link
                                        class="social-icon-link telegram"
                                        to="/"
                                        target="_blank"
                                        aria-label="Youtube"
                                    >
                                        <i class="fab fa-telegram" />
                                    </Link>
                                    <Link
                                        class="social-icon-link facebook"
                                        to="/"
                                        target="_blank"
                                        aria-label="Facebook"
                                    >
                                        <i class="fab fa-facebook-f" />
                                    </Link>
                                    <Link
                                        class="social-icon-link twitter"
                                        to="/"
                                        target="_blank"
                                        aria-label="Twitter"
                                    >
                                        <i class="fab fa-twitter" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
