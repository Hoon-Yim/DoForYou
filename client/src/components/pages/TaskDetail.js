import React from "react";
import { Button } from "../Button";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./TaskDetail.css";

function TaskDetail() {
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
                                        Create a turnkey website
                                    </div>
                                    <div className="task-detail-main-bottom">
                                        <div className="task-detail-written-date">
                                            <div className="written">
                                                Written
                                            </div>
                                            <div className="written-date">
                                                Jan 1, 2023
                                            </div>
                                        </div>
                                        <div className="task-detail-views">
                                            <div className="views-number">
                                                32
                                            </div>
                                            <div className="views">views</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="task-detail-content-body">
                                    <div className="task-detail-content-body-address">
                                        <div className="task-detail-content-body-key">
                                            Address
                                        </div>
                                        <div className="task-detail-content-body-value">
                                            Can be done remotely
                                        </div>
                                    </div>
                                    <div className="task-detail-content-body-start">
                                        <div className="task-detail-content-body-key">
                                            Start date
                                        </div>
                                        <div className="task-detail-content-body-value">
                                            Jan 4, 2023 12:00
                                        </div>
                                    </div>
                                    <div className="task-detail-content-body-end">
                                        <div className="task-detail-content-body-key">
                                            End date
                                        </div>
                                        <div className="task-detail-content-body-value">
                                            Jan 10, 2023 23:59
                                        </div>
                                    </div>
                                    <hr className="task-detail-horizontal-line" />
                                    <div className="task-detail-content-body-budget">
                                        <div className="task-detail-content-body-key">
                                            Budget
                                        </div>
                                        <div className="task-detail-content-body-value">
                                            $ 225.00
                                        </div>
                                    </div>
                                    <div className="task-detail-content-body-payment">
                                        <div className="task-detail-content-body-key">
                                            How to pay
                                        </div>
                                        <div className="task-detail-content-body-value">
                                            by Bank e-transfer
                                        </div>
                                    </div>
                                    <hr className="task-detail-horizontal-line" />
                                    <div className="task-detail-content-body-desc">
                                        <div className="task-detail-content-body-key">
                                            Details
                                        </div>
                                        <div className="task-detail-content-body-value">
                                            Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem
                                            accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae
                                            ab illo inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt
                                            explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed
                                            quia consequuntur magni dolores eos
                                            qui ratione voluptatem sequi
                                            nesciunt.
                                        </div>
                                    </div>
                                    <div className="task-detail-btn-interest">
                                        <Button
                                            buttonStyle="btn--primary-yellow"
                                            buttonSize="btn--large-bold"
                                            buttonRadius="btn--half-rounded"
                                            type="submit"
                                        >
                                            I'M INTERESTED
                                        </Button>
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
