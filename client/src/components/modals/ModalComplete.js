import React from "react";
import { Button } from "../Button";
import "./ModalComplete.css";

const ModalComplete = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal-complete" onClick={props.onClose}>
            <div
                className="modal-complete-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-complete-header">
                    <h4 className="modal-complete-title">Completed the task</h4>
                </div>
                <div className="modal-complete-body">
                    <div className="modal-complete-body-text">
                        Are you sure you completed the task properly?
                    </div>
                </div>
                <div className="modal-complete-btns">
                    <div className="modal-complete-no-btn">
                        <Button
                            buttonStyle="btn--cancel"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={props.onClose}
                        >
                            No
                        </Button>
                    </div>
                    <div className="modal-complete-yes-btn">
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

export default ModalComplete;
