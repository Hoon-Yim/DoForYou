import React from "react";
import { Button } from "../../Button";
import "../../../App.css";
import "./Main.css";

function Main() {
    return (
        <div className="main-container">
            <div className="main-image">
                <img
                    className="main-image-png"
                    src={process.env.PUBLIC_URL + "images/main-home.png"}
                    alt="main"
                />
            </div>
            <div className="main-content">
                <div className="main-text">
                    <h2>Let us free you from worries</h2>
                    <h1>DoForYou</h1>
                    <div className="deco-cursor">
                        <div className="deco-cursor-line">
                            <div className="deco-cursor-text">
                                <div className="deco-cursor-text-block">
                                    How?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-btns">
                    <Button
                        className="btn"
                        buttonStyle="btn--secondary-dark"
                        buttonSize="btn--large"
                    >
                        GET STARTED
                    </Button>
                    <Button
                        className="btn"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                    >
                        CONTACT US
                        <i className="fa-solid fa-comments chat-icon" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Main;
