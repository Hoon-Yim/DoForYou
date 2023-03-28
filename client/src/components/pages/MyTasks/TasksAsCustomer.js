import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./TasksAsCustomer.css";

function TasksAsCustomer() {
    return (
        <>
            <div id="container">
                <Navbar />

                <div className="tasks-customer">
                    <div className="tasks-customer-container">
                        <div className="tasks-customer-wrapper">
                            <div className="tasks-customer-title">
                                <h1 className="tasks-customer-title-main">
                                    My tasks
                                </h1>
                                <h5 className="tasks-customer-title-sub">
                                    <div className="tasks-customer-title-sub-text-upper">
                                        Check the tasks what you've created
                                    </div>
                                    <div className="tasks-customer-title-sub-text-lower">
                                        and review the performers after the task
                                        is completed
                                    </div>
                                </h5>
                            </div>
                            <div className="tasks-customer-role-container">
                                <div className="tasks-customer-role-box">
                                    <div className="role-filter">
                                        <Link to="/my-tasks-customer">
                                            <button className="tasks-customer-role-customer-button">
                                                As a customer
                                            </button>
                                        </Link>
                                        <Link to="/my-tasks-performer">
                                            <button className="tasks-customer-role-performer-button">
                                                As a performer
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="tasks-customer-content">
                                <div className="tasks-customer-filter">
                                    <div className="tasks-customer-filter-list">
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                All categories
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Courier services
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Cargo Transportation
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Transport Repair
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Event and Promotions
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Computer
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Software Development
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Design
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Photo, Video and Audio
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Repair and Construction
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Cleaning and Household
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Installation
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Repair of Digital Equipment
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Virtual Assistant
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Beauty and Health
                                            </div>
                                        </div>
                                        <div className="tasks-customer-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                            />
                                            <div className="filter-label">
                                                Tutors and Training
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tasks-customer-left-content">
                                    <div className="tasks-customer-left-content-title">
                                        Created
                                    </div>
                                    <div className="tasks-customer-left-content-list">
                                        {/* My tasks 1 */}
                                        <div className="tasks-customer-left-list-item">
                                            <div className="tasks-customer-left-list-item-top">
                                                <div className="tasks-customer-left-list-item-title">
                                                    Cartoon Drawing Tutor
                                                </div>
                                                <div className="tasks-customer-left-list-item-price">
                                                    <div className="tasks-customer-left-price-tag">
                                                        $
                                                    </div>
                                                    <div className="tasks-customer-left-price-number">
                                                        450.00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tasks-customer-left-list-item-bottom">
                                                <div className="tasks-customer-left-list-item-desc">
                                                    <div className="tasks-customer-left-list-item-desc-address">
                                                        Can be done remotely
                                                    </div>
                                                    <div className="tasks-customer-left-list-item-desc-when">
                                                        <div className="tasks-customer-left-list-item-desc-date-title">
                                                            Date:
                                                        </div>
                                                        <div className="tasks-customer-left-list-item-desc-date-time">
                                                            <div className="tasks-customer-left-list-item-desc-starting-date">
                                                                Feb 1, 2023
                                                                00:00
                                                            </div>
                                                            <div className="tasks-customer-left-list-item-desc-ending-date">
                                                                - Feb 27, 2023
                                                                23:59
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tasks-customer-right-content">
                                    <div className="tasks-customer-right-content-title">
                                        Completed
                                    </div>
                                    <div className="tasks-customer-right-content-list">
                                        {/* My tasks 1 */}
                                        <div className="tasks-customer-right-list-item">
                                            <div className="tasks-customer-right-list-item-top">
                                                <div className="tasks-customer-right-list-item-title">
                                                    Cleaning Office
                                                </div>
                                                <div className="tasks-customer-right-list-item-price">
                                                    <div className="tasks-customer-right-price-tag">
                                                        $
                                                    </div>
                                                    <div className="tasks-customer-right-price-number">
                                                        80.00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tasks-customer-right-list-item-bottom">
                                                <div className="tasks-customer-right-list-item-desc">
                                                    <div className="tasks-customer-right-list-item-desc-address">
                                                        5700 Yonge St, North
                                                        York
                                                    </div>
                                                    <div className="tasks-customer-right-list-item-desc-when">
                                                        <div className="tasks-customer-right-list-item-desc-date-title">
                                                            Date:
                                                        </div>
                                                        <div className="tasks-customer-right-list-item-desc-date-time">
                                                            <div className="tasks-customer-right-list-item-desc-starting-date">
                                                                Aug 24, 2022
                                                                12:00
                                                            </div>
                                                            <div className="tasks-customer-right-list-item-desc-ending-date">
                                                                - Aug 24, 2022
                                                                15:00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tasks-customer-right-list-item-performer">
                                                    <div className="tasks-customer-right-list-done-by">
                                                        Done by
                                                    </div>
                                                    <div className="tasks-customer-right-list-item-performer-name">
                                                        Bonnie A.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* My tasks 2 */}
                                        <div className="tasks-customer-right-list-item">
                                            <div className="tasks-customer-right-list-item-top">
                                                <div className="tasks-customer-right-list-item-title">
                                                    Eradication of mold
                                                </div>
                                                <div className="tasks-customer-right-list-item-price">
                                                    <div className="tasks-customer-right-price-tag">
                                                        $
                                                    </div>
                                                    <div className="tasks-customer-right-price-number">
                                                        95.00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tasks-customer-right-list-item-bottom">
                                                <div className="tasks-customer-right-list-item-desc">
                                                    <div className="tasks-customer-right-list-item-desc-address">
                                                        35 Henry St, Toronto
                                                    </div>
                                                    <div className="tasks-customer-right-list-item-desc-when">
                                                        <div className="tasks-customer-right-list-item-desc-date-title">
                                                            Date:
                                                        </div>
                                                        <div className="tasks-customer-right-list-item-desc-date-time">
                                                            <div className="tasks-customer-right-list-item-desc-starting-date">
                                                                Oct 19, 2022
                                                                19:00
                                                            </div>
                                                            <div className="tasks-customer-right-list-item-desc-ending-date">
                                                                - Oct 20, 2022
                                                                10:00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tasks-customer-right-list-item-performer">
                                                    <div className="tasks-customer-right-list-done-by">
                                                        Done by
                                                    </div>
                                                    <div className="tasks-customer-right-list-item-performer-name">
                                                        Stan L.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* My tasks 3 */}
                                        <div className="tasks-customer-right-list-item">
                                            <div className="tasks-customer-right-list-item-top">
                                                <div className="tasks-customer-right-list-item-title">
                                                    Getting car detailed
                                                </div>
                                                <div className="tasks-customer-right-list-item-price">
                                                    <div className="tasks-customer-right-price-tag">
                                                        $
                                                    </div>
                                                    <div className="tasks-customer-right-price-number">
                                                        110.00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tasks-customer-right-list-item-bottom">
                                                <div className="tasks-customer-right-list-item-desc">
                                                    <div className="tasks-customer-right-list-item-desc-address">
                                                        1023 Balmoral Ave,
                                                        Toronto
                                                    </div>
                                                    <div className="tasks-customer-right-list-item-desc-when">
                                                        <div className="tasks-customer-right-list-item-desc-date-title">
                                                            Date:
                                                        </div>
                                                        <div className="tasks-customer-right-list-item-desc-date-time">
                                                            <div className="tasks-customer-right-list-item-desc-starting-date">
                                                                Nov 14, 2022
                                                                10:00
                                                            </div>
                                                            <div className="tasks-customer-right-list-item-desc-ending-date">
                                                                - Nov 14, 2022
                                                                18:00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tasks-customer-right-list-item-performer">
                                                    <div className="tasks-customer-right-list-done-by">
                                                        Done by
                                                    </div>
                                                    <div className="tasks-customer-right-list-item-performer-name">
                                                        Minsu K.
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
            </div>
        </>
    );
}

export default TasksAsCustomer;
