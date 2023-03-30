import React from "react";
import { Button } from "../Button";
import "./ModalInterest.css";

const ModalCancel = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal-cancel" onClick={props.onClose}>
            <div
                className="modal-cancel-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-cancel-header">
                    <h4 className="modal-cancel-title">Cancel the task</h4>
                </div>
                <div className="modal-cancel-body">
                    <div className="modal-cancel-body-text">
                        Are you sure you'd like to cancel the task?
                    </div>
                </div>
                <div className="modal-cancel-btns">
                    <div className="modal-cancel-no-btn">
                        <Button
                            buttonStyle="btn--cancel"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={props.onClose}
                        >
                            No
                        </Button>
                    </div>
                    <div className="modal-cancel-yes-btn">
                        <Button
                            buttonStyle="btn--primary-yellow"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={props.onClose}
                        >
                            Yes
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCancel;
