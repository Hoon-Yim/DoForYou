import React, { useState } from "react";
import { Button } from "../Button";
import "./ModalReviewCustomer.css";

const ModalReviewCustomer = (props) => {
    const [isClickGood, setIsClickGood] = useState(false);
    const [isClickBad, setIsClickBad] = useState(false);

    const selectGoodThumbs = () => {
        let classname = "fa-regular fa-thumbs-up fa-3x modal-review-thumbs-up ";
        if (isClickGood) {
            classname += "selected-thumbs";
        }
        return (
            <i
                class={classname}
                onClick={() => {
                    setIsClickGood(true);
                    setIsClickBad(false);
                }}
            />
        );
    };
    const selectBadThumbs = () => {
        let classname =
            "fa-regular fa-thumbs-down fa-3x fa-flip-horizontal modal-review-thumbs-down ";
        if (isClickBad) {
            classname += "selected-thumbs";
        }
        return (
            <i
                class={classname}
                onClick={() => {
                    setIsClickBad(true);
                    setIsClickGood(false);
                }}
            />
        );
    };
    const showKeywordBox = () => {
        if (isClickGood) {
            return (
                <div className="modal-review-customer-good-keyword">
                    <div className="review-customer-good-keyword-row">
                        <Button
                            buttonStyle="btn--slim-category"
                            buttonSize="btn--small"
                            buttonRadius="btn--rounded"
                        >
                            Punctual payment
                        </Button>
                        <Button
                            buttonStyle="btn--slim-category"
                            buttonSize="btn--small"
                            buttonRadius="btn--rounded"
                        >
                            Good manners
                        </Button>
                    </div>
                    <div className="review-customer-good-keyword-row">
                        <Button
                            buttonStyle="btn--slim-category"
                            buttonSize="btn--small"
                            buttonRadius="btn--rounded"
                        >
                            Friendly
                        </Button>
                        <Button
                            buttonStyle="btn--slim-category"
                            buttonSize="btn--small"
                            buttonRadius="btn--rounded"
                        >
                            Great Communication
                        </Button>
                    </div>
                    <div className="review-customer-good-keyword-row">
                        <Button
                            buttonStyle="btn--slim-category"
                            buttonSize="btn--small"
                            buttonRadius="btn--rounded"
                        >
                            Reasonable request
                        </Button>
                        <Button
                            buttonStyle="btn--slim-category"
                            buttonSize="btn--small"
                            buttonRadius="btn--rounded"
                        >
                            Positive
                        </Button>
                    </div>
                </div>
            );
        } else if (isClickBad) {
            return (
                <div className="modal-review-customer-bad-keyword">
                    <div className="review-customer-good-keyword-row">
                        <Button
                            buttonStyle="btn--slim-category"
                            buttonSize="btn--small"
                            buttonRadius="btn--rounded"
                        >
                            Payment delay
                        </Button>
                        <Button
                            buttonStyle="btn--slim-category"
                            buttonSize="btn--small"
                            buttonRadius="btn--rounded"
                        >
                            Lack of description
                        </Button>
                    </div>
                    <div className="review-customer-good-keyword-row">
                        <Button
                            buttonStyle="btn--slim-category"
                            buttonSize="btn--small"
                            buttonRadius="btn--rounded"
                        >
                            Rude
                        </Button>
                        <Button
                            buttonStyle="btn--slim-category"
                            buttonSize="btn--small"
                            buttonRadius="btn--rounded"
                        >
                            Poor Communication
                        </Button>
                    </div>
                    <div className="review-customer-good-keyword-row">
                        <Button
                            buttonStyle="btn--slim-category"
                            buttonSize="btn--small"
                            buttonRadius="btn--rounded"
                        >
                            Unreasonable request
                        </Button>
                        <Button
                            buttonStyle="btn--slim-category"
                            buttonSize="btn--small"
                            buttonRadius="btn--rounded"
                        >
                            Negative
                        </Button>
                    </div>
                </div>
            );
        } else {
            return <></>;
        }
    };
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal-review-customer" onClick={props.onClose}>
            <div
                className="modal-review-customer-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-review-customer-header">
                    <h4 className="modal-review-customer-title">
                        Review the customer
                    </h4>
                </div>
                <div className="modal-review-customer-body">
                    <div className="modal-review-customer-user-image-box">
                        <div className="modal-review-customer-user-image">
                            <img src="images/profile/m4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="modal-review-customer-body-username">
                        Michael D.
                    </div>
                    <div className="modal-review-customer-good-bad-box">
                        <div className="modal-review-customer-good">
                            {selectGoodThumbs()}
                        </div>
                        <div className="modal-review-customer-bad">
                            {selectBadThumbs()}
                        </div>
                    </div>
                    <div className="modal-review-customer-body-keyword-box">
                        {showKeywordBox()}
                    </div>
                </div>
                <div className="modal-review-customer-btns">
                    <div className="modal-review-customer-submit-btn">
                        <Button
                            buttonStyle="btn--primary-yellow"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={props.onClose}
                        >
                            Submit
                        </Button>
                    </div>
                    <div className="modal-review-customer-cancel-btn">
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

export default ModalReviewCustomer;
