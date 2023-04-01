import axios from "axios";
import Cookies from "universal-cookie";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../Button";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./TaskDetail.css";
import ModalInterest from "../../modals/ModalInterest";
import ModalComplete from "../../modals/ModalComplete"
import ModalReviewCustomer from "../../modals/ModalReviewCustomer";
import ModalReviewPerformer from "../../modals/ModalReviewPerformer";

import UploadedCustomerButton from "./UploadedCustomerButton";
import AssignedPerformerButton from "./AssignedPerformerButton";
import UnassignedPerformerButton from "./UnassignedPerformerButton";

function TaskDetail() {
    const cookies = new Cookies();
    const params = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/tasks/${params.taskId}`)
            .then(data => {
                setTask(data.data.task);
            });
        
        axios
            .get(`http://localhost:8000/api/users/getLoggedInUser/${cookies.get("jwt")}`)
            .then(data => {
                setUser(data.data.user);
            });
    }, []);

    const populateButton = () => {
        // if performer but unassigned
        if (user.role === "customer") {
            if (task.uploadedUser._id === user._id) {
                return (
                    <>
                        <Button
                            buttonStyle="btn--cancel"
                            buttonSize="btn--large-bold"
                            buttonRadius="btn--half-rounded"
                            onClick={() => { navigate(`/edit-task/${task._id}`) }}
                        >
                            Edit
                        </Button>
                        <UploadedCustomerButton />
                    </>
                )
            } else {
                return null;
            }
        } else if (user.role === "performer") {
            if (task.assingedUser) { // when the task has assigned performer
                if (task.assingedUser._id === user._id) {
                    return <AssignedPerformerButton />    // showing complete button
                } else {
                    return (
                        <Button
                            buttonStyle="btn--cancel"
                            buttonSize="btn--large-bold"
                            buttonRadius="btn--half-rounded"
                        >
                            Already Assigned
                        </Button>
                    )
                }
            } else {                                  // logged in user is not assigned user
                return <UnassignedPerformerButton />  // showing interst button
            }
        } else {
            if (task.isCompleted === true) {
                return (
                    <Button
                        buttonStyle="btn--cancel"
                        buttonSize="btn--large-bold"
                        buttonRadius="btn--half-rounded"
                    >
                        Completed
                    </Button>
                )
            } else {
                return null;
            }
        }
    }

    return (
        <>
            <div id="container">
                <Navbar />

                <div className="task-detail">
                    <div className="task-detail-container">
                        <div className="task-detail-wrapper">
                            <div className="task-detail-content">
                                <div className="task-detail-content-main">
                                    <div className="task-detail-title">
                                        {task.title}
                                    </div>
                                    <div className="task-detail-main-bottom">
                                        <div className="task-detail-written-date">
                                            <div className="written">
                                                Written
                                            </div>
                                            <div className="written-date">
                                                {new Date(
                                                    task.updatedAt
                                                ).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </div>
                                        </div>
                                        {/* <div className="task-detail-views">
                                                <div className="views-number">
                                                    32
                                                </div>
                                                <div className="views">views</div>
                                            </div> */}
                                    </div>
                                </div>
                                <div className="task-detail-content-body">
                                    <div className="task-detail-content-body-address">
                                        <div className="task-detail-content-body-key">
                                            Address
                                        </div>
                                        <div className="task-detail-content-body-value">
                                            {task.remote
                                                ? "Can be done remotely"
                                                : `${
                                                      task.location &&
                                                      task.location.address
                                                  }`}
                                        </div>
                                    </div>
                                    <div className="task-detail-content-body-start">
                                        <div className="task-detail-content-body-key">
                                            Start date
                                        </div>
                                        <div className="task-detail-content-body-value">
                                            {new Date(
                                                task.startDate
                                            ).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                                hour: "numeric",
                                                minute: "numeric",
                                            })}{" "}
                                        </div>
                                    </div>
                                    <div className="task-detail-content-body-end">
                                        <div className="task-detail-content-body-key">
                                            End date
                                        </div>
                                        <div className="task-detail-content-body-value">
                                            {new Date(
                                                task.endDate
                                            ).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                                hour: "numeric",
                                                minute: "numeric",
                                            })}{" "}
                                        </div>
                                    </div>
                                    <hr className="task-detail-horizontal-line" />
                                    <div className="task-detail-content-body-budget">
                                        <div className="task-detail-content-body-key">
                                            Budget
                                        </div>
                                        <div className="task-detail-content-body-value">
                                            ${task.budget}
                                        </div>
                                    </div>
                                    <div className="task-detail-content-body-payment">
                                        <div className="task-detail-content-body-key">
                                            How to pay
                                        </div>
                                        <div className="task-detail-content-body-value">
                                            by {task.paymentMethod}
                                        </div>
                                    </div>
                                    <hr className="task-detail-horizontal-line" />
                                    <div className="task-detail-content-body-desc">
                                        <div className="task-detail-content-body-key">
                                            Details
                                        </div>
                                        <div className="task-detail-content-body-value">
                                            {task.details}
                                        </div>
                                    </div>
                                    <div className="task-detail-btn-interest">
                                        {populateButton()}
                                        {/* Testing modal for Reviewing customer */}
                                        {/*
                                        <ModalReviewCustomer
                                            onClose={() => setShow(false)}
                                            show={show}
                                        />
                                        */}

                                        {/* Testing modal for Reviewing Performer */}
                                        {/* <ModalReviewPerformer
                                            onClose={() => setShow(false)}
                                            show={show}
                                        /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="task-detail-user-box">
                                <div className="task-detail-user-title">
                                    Customer Information
                                </div>
                                <div className="task-detail-user-image">
                                    <img src="images/profile/m4.jpg" alt="" />
                                </div>
                                <div className="task-detail-user-name">
                                    Michael D.
                                </div>
                                <div className="task-detail-user-reviews">
                                    Reviews:
                                    <i className="fa-solid fa-thumbs-up task-detail-thumbs-up"></i>
                                    <div className="task-detail-user-reviews-number">
                                        21
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

export default TaskDetail;
