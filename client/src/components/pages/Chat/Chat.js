import React from "react";
import { Button } from "../../Button";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./Chat.css";
import ContactPhoto from "./ContactPhoto";

function Chat() {
    return (
        <>
            <div id="container">
                <Navbar />

                <div className="chat">
                    <div className="chat-container">
                        {/* Start */}
                        <div className="chat-wrapper">
                            <div className="chat-contacts">
                                <div className="chat-contacts-title">Chats</div>
                                <div
                                    className="chat-contacts-person" /*onClick={() => }*/
                                >
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 1
                                    </div>
                                </div>
                                <div className="chat-contacts-person selected">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 2
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 3
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 4
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 5
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 6
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 7
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 8
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 9
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 10
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 11
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 12
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 13
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 14
                                    </div>
                                </div>
                                <div className="chat-contacts-person">
                                    <ContactPhoto />
                                    <div className="chat-contacts-person-name">
                                        User 15
                                    </div>
                                </div>
                            </div>
                            <div className="chat-messages">
                                <div className="chat-messages-chatting">
                                    <div className="chat-chatting">
                                        {/*
                                        <div className="chat-message-box sender">
                                            <div className="chat-message-from-other">
                                                Hello, I'm a sender
                                            </div>
                                        </div>
                                        <div className="chat-message-box me">
                                            <div className="chat-message-from-me">
                                                Hello, It's me
                                            </div>
                                        </div>
                                        <div className="chat-message-box sender">
                                            <div className="chat-message-from-other">
                                                Hello, I'm a sender
                                            </div>
                                        </div>
                                        <div className="chat-message-box me">
                                            <div className="chat-message-from-me">
                                                Hello, It's me
                                            </div>
                                        </div>
                                        <div className="chat-message-box sender">
                                            <div className="chat-message-from-other">
                                                Hello, I'm a sender
                                            </div>
                                        </div>
                                        <div className="chat-message-box me">
                                            <div className="chat-message-from-me">
                                                Hello, It's me
                                            </div>
                                        </div>
                                        <div className="chat-message-box sender">
                                            <div className="chat-message-from-other">
                                                Hello, I'm a sender
                                            </div>
                                        </div>
                                        <div className="chat-message-box me">
                                            <div className="chat-message-from-me">
                                                Hello, It's me
                                            </div>
                                        </div>
                                        <div className="chat-message-box sender">
                                            <div className="chat-message-from-other">
                                                Hello, I'm a sender
                                            </div>
                                        </div>
                                        <div className="chat-message-box me">
                                            <div className="chat-message-from-me">
                                                Hello, It's me
                                            </div>
                                        </div>
                                        <div className="chat-message-box sender">
                                            <div className="chat-message-from-other">
                                                Hello, I'm a sender
                                            </div>
                                        </div>
                                        <div className="chat-message-box me">
                                            <div className="chat-message-from-me">
                                                Hello, It's me
                                            </div>
                                        </div>
                                        <div className="chat-message-box sender">
                                            <div className="chat-message-from-other">
                                                Hello, I'm a sender
                                            </div>
                                        </div>
                                        <div className="chat-message-box me">
                                            <div className="chat-message-from-me">
                                                Hello, It's me
                                            </div>
                                        </div>
                                        <div className="chat-message-box sender">
                                            <div className="chat-message-from-other">
                                                Hello, I'm a sender
                                            </div>
                                        </div>
                                        <div className="chat-message-box me">
                                            <div className="chat-message-from-me">
                                                Hello, It's me
                                            </div>
                                        </div>
                                    
                                    */}
                                        <div className="chat-before-chat">
                                            <div className="chat-before-chat-arrow">
                                                <i className="fa-solid fa-arrow-left fa-3x chat-arrow" />
                                            </div>
                                            <div className="chat-before-chat-text">
                                                <div className="chat-before-chat-main">
                                                    <div className="chat-before-chat-main-greeting">
                                                        Hello,
                                                    </div>
                                                    <div className="chat-before-chat-main-username">
                                                        Seunghun
                                                    </div>
                                                </div>
                                                <div className="chat-before-chat-sub">
                                                    Please select a chat to
                                                    start chatting.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-message-input-box">
                                    <input
                                        className="chat-input"
                                        type="text"
                                        placeholder="Type your message here"
                                    />
                                    <Button
                                        buttonStyle="btn--secondary-dark"
                                        buttonSize="btn--medium-bold"
                                        buttonRadius="btn--square"
                                        type="submit"
                                    >
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* End */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;
