import React, { useState } from "react";
import { Button } from "../Button";
import "./ModalReviewPerformer.css";
import OneStarClicked from "./OneStarClicked";

const ModalReviewPerformer = (props) => {
    const [isOneStarClicked, setIsOneStarClicked] = useState(false);
    const [isTwoStarsClicked, setIsTwoStarsClicked] = useState(false);
    const [isThreeStarsClicked, setIsThreeStarsClicked] = useState(false);
    const [isFourStarsClicked, setIsFourStarsClicked] = useState(false);
    const [isFiveStarsClicked, setIsFiveStarsClicked] = useState(false);
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal-review-performer" onClick={props.onClose}>
            <div
                className="modal-review-performer-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-review-performer-header">
                    <h4 className="modal-review-performer-title">
                        Review the customer
                    </h4>
                </div>
                <div className="modal-review-performer-body">
                    <div className="modal-review-performer-user-image-box">
                        <div className="modal-review-performer-user-image">
                            <img src="images/profile/f4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="modal-review-performer-body-username">
                        Bella H.
                    </div>

                    {isOneStarClicked ? (
                        <OneStarClicked />
                    ) : (
                        <div className="modal-review-performer-stars-box">
                            <div className="modal-review-performer-stars">
                                <div className="modal-review-performer-star">
                                    <i
                                        class="fa-regular fa-star fa-xl review-performer-star"
                                        onClick={() =>
                                            setIsOneStarClicked(
                                                !isOneStarClicked
                                            )
                                        }
                                    />
                                </div>
                                <div className="modal-review-performer-star">
                                    <i
                                        class="fa-regular fa-star fa-xl review-performer-star"
                                        onClick={() =>
                                            setIsTwoStarsClicked(
                                                !isTwoStarsClicked
                                            )
                                        }
                                    />
                                </div>
                                <div className="modal-review-performer-star">
                                    <i
                                        class="fa-regular fa-star fa-xl review-performer-star"
                                        onClick={() =>
                                            setIsThreeStarsClicked(
                                                !isThreeStarsClicked
                                            )
                                        }
                                    />
                                </div>
                                <div className="modal-review-performer-star">
                                    <i
                                        class="fa-regular fa-star fa-xl review-performer-star"
                                        onClick={() =>
                                            setIsFourStarsClicked(
                                                !isFourStarsClicked
                                            )
                                        }
                                    />
                                </div>
                                <div className="modal-review-performer-star">
                                    <i
                                        class="fa-regular fa-star fa-xl review-performer-star"
                                        onClick={() =>
                                            setIsFiveStarsClicked(
                                                !isFiveStarsClicked
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="modal-review-performer-body-opinion-box">
                        <textarea
                            className="modal-review-performer-body-opinion-textarea"
                            rows={7}
                            placeholder="Share your opinion about this performer"
                        />
                    </div>
                </div>
                <div className="modal-review-performer-btns">
                    <div className="modal-review-performer-submit-btn">
                        <Button
                            buttonStyle="btn--primary-yellow"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={props.onClose}
                        >
                            Submit
                        </Button>
                    </div>
                    <div className="modal-review-performer-cancel-btn">
                        <Button
                            buttonStyle="btn--cancel"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={props.onClose}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalReviewPerformer;
