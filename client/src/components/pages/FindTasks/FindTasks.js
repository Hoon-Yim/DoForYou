import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./FindTasks.css";
import axios from "axios";
import FindTasksItem from "./FindTasksItem";

function FindTasks() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/tasks").then((data) => {
            setTasks(data.data.tasks);
        });
    }, []);
    return (
        <>
            <Navbar />

            <div className="find-tasks">
                <div className="find-tasks-container">
                    <div className="find-tasks-wrapper">
                        <div className="find-tasks-title">
                            <h1 className="find-tasks-title-main">All tasks</h1>
                            <h5 className="find-tasks-title-sub">
                                Let's search the task which needs your help
                            </h5>
                        </div>
                        <div className="find-tasks-search-container">
                            <div className="find-tasks-search-wrap">
                                <div className="search-box">
                                    <input
                                        type="text"
                                        className="search-input"
                                        placeholder="Search the keyword"
                                    />
                                    <div className="button button_common">
                                        SEARCH
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="find-tasks-content">
                            <div className="find-tasks-filter">
                                <div className="find-tasks-filter-list">
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            All categories
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Courier services
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Cargo Transportation
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Transport Repair
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Event and Promotions
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Computer
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Software Development
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Design
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Photo, Video and Audio
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Repair and Construction
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Cleaning and Household
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Installation
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Repair of Digital Equipment
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Virtual Assistant
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
                                        <input
                                            type="checkbox"
                                            className="filter-checkbox"
                                        />
                                        <div className="filter-label">
                                            Beauty and Health
                                        </div>
                                    </div>
                                    <div className="find-tasks-filter-list-row">
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
                            <div className="find-tasks-list">
                                {tasks.map((task) => (
                                    <FindTasksItem task={task} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default FindTasks;
