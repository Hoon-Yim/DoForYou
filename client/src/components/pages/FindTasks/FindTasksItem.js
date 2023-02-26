import React from "react";

export default function FindTasksItem(props) {
    return (
        <div className="find-task-list-item">
            <div className="find-task-list-item-top">
                <div className="find-task-list-item-title">
                    {props.task.title}
                </div>
                <div className="find-task-list-item-price">
                    <div className="find-task-price-tag">$</div>
                    <div className="find-task-price-number">
                        {props.task.budget}.00
                    </div>
                </div>
            </div>
            <div className="find-task-list-item-bottom">
                <div className="find-task-list-item-desc">
                    <div className="find-task-list-item-desc-address">
                        {props.task.remote
                            ? "Can be done remotely"
                            : `${props.task.location.city}, ${props.task.location.province}`}
                    </div>
                    <div className="find-task-list-item-desc-when">
                        <div className="find-task-list-item-desc-date-title">
                            Date:
                        </div>
                        <div className="find-task-list-item-desc-date-time">
                            {/* change later */}
                            Jan 4, 2023 12:00 - Jan 10, 2023 23:59
                        </div>
                    </div>
                </div>
                {/* change later */}
                <div className="find-task-list-item-uploader">Michael D.</div>
            </div>
        </div>
    );
}
