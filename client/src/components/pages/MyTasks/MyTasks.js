import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./MyTasks.css";

function MyTasks() {
    return (
        <>
            <Navbar />

            <div className="my-tasks">
                <div className="my-tasks-container">
                    <div className="my-tasks-wrapper">
                        <div className="my-tasks-title">
                            <h1 className="my-tasks-title-main">My tasks</h1>
                        </div>
                        <div className="my-tasks-role-container">
                            <div className="my-tasks-role-wrap">
                                <div className="my-tasks-role-box">
                                    <div className="role-filter">
                                        <Link to="/">
                                            <button className="role-customer-button">
                                                As a customer
                                            </button>
                                        </Link>
                                        <Link to="/">
                                            <button className="role-performer-button">
                                                As a performer
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="my-tasks-content">
                            <div className="my-tasks-left-content">
                                <div className="my-tasks-left-content-title">
                                    Created
                                </div>
                                <div className="my-tasks-left-content-list">
                                    {/* My tasks 1 */}
                                    <div className="my-tasks-left-list-item">
                                        <div className="my-tasks-left-list-item-top">
                                            <div className="my-tasks-left-list-item-title">
                                                Cartoon Drawing Tutor
                                            </div>
                                            <div className="my-tasks-left-list-item-price">
                                                <div className="my-tasks-left-price-tag">
                                                    $
                                                </div>
                                                <div className="my-tasks-left-price-number">
                                                    450.00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-tasks-left-list-item-bottom">
                                            <div className="my-tasks-left-list-item-desc">
                                                <div className="my-tasks-left-list-item-desc-address">
                                                    Can be done remotely
                                                </div>
                                                <div className="my-tasks-left-list-item-desc-when">
                                                    <div className="my-tasks-left-list-item-desc-date-title">
                                                        Date:
                                                    </div>
                                                    <div className="my-tasks-left-list-item-desc-date-time">
                                                        <div className="my-tasks-left-list-item-desc-starting-date">
                                                            Feb 1, 2023 00:00
                                                        </div>
                                                        <div className="my-tasks-left-list-item-desc-ending-date">
                                                            - Feb 27, 2023 23:59
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-tasks-right-content">
                                <div className="my-tasks-right-content-title">
                                    Completed
                                </div>
                                <div className="my-tasks-right-content-list">
                                    {/* My tasks 1 */}
                                    <div className="my-tasks-right-list-item">
                                        <div className="my-tasks-right-list-item-top">
                                            <div className="my-tasks-right-list-item-title">
                                                Cleaning Office
                                            </div>
                                            <div className="my-tasks-right-list-item-price">
                                                <div className="my-tasks-right-price-tag">
                                                    $
                                                </div>
                                                <div className="my-tasks-right-price-number">
                                                    80.00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-tasks-right-list-item-bottom">
                                            <div className="my-tasks-right-list-item-desc">
                                                <div className="my-tasks-right-list-item-desc-address">
                                                    5700 Yonge St, North York
                                                </div>
                                                <div className="my-tasks-right-list-item-desc-when">
                                                    <div className="my-tasks-right-list-item-desc-date-title">
                                                        Date:
                                                    </div>
                                                    <div className="my-tasks-right-list-item-desc-date-time">
                                                        <div className="my-tasks-right-list-item-desc-starting-date">
                                                            Aug 24, 2022 12:00
                                                        </div>
                                                        <div className="my-tasks-right-list-item-desc-ending-date">
                                                            - Aug 24, 2022 15:00
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-tasks-right-list-item-performer">
                                                <div className="my-tasks-right-list-done-by">
                                                    Done by
                                                </div>
                                                <div className="my-tasks-right-list-item-performer-name">
                                                    Bonnie A.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* My tasks 2 */}
                                    <div className="my-tasks-right-list-item">
                                        <div className="my-tasks-right-list-item-top">
                                            <div className="my-tasks-right-list-item-title">
                                                Eradication of mold{" "}
                                            </div>
                                            <div className="my-tasks-right-list-item-price">
                                                <div className="my-tasks-right-price-tag">
                                                    $
                                                </div>
                                                <div className="my-tasks-right-price-number">
                                                    95.00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-tasks-right-list-item-bottom">
                                            <div className="my-tasks-right-list-item-desc">
                                                <div className="my-tasks-right-list-item-desc-address">
                                                    35 Henry St, Toronto{" "}
                                                </div>
                                                <div className="my-tasks-right-list-item-desc-when">
                                                    <div className="my-tasks-right-list-item-desc-date-title">
                                                        Date:
                                                    </div>
                                                    <div className="my-tasks-right-list-item-desc-date-time">
                                                        <div className="my-tasks-right-list-item-desc-starting-date">
                                                            Oct 19, 2022 19:00
                                                        </div>
                                                        <div className="my-tasks-right-list-item-desc-ending-date">
                                                            - Oct 20, 2022 10:00
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-tasks-right-list-item-performer">
                                                <div className="my-tasks-right-list-done-by">
                                                    Done by
                                                </div>
                                                <div className="my-tasks-right-list-item-performer-name">
                                                    Stan L.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default MyTasks;
