import React from "react";
import { Button } from "../../Button";
import "./Categories.css";

function Categrories() {
    return (
        <div className="categories">
            <div className="categories-container">
                <div className="categories-wrapper">
                    <div className="categories-title">
                        <h1 className="title-main">Categories</h1>
                        <h5 className="title-sub">
                            15 categories are here for you with honest reviews:
                        </h5>
                    </div>
                    <div className="categories-list">
                        <div className="categories-list-row">
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-box cate-icon" />
                                Courier Services
                            </Button>
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-truck cate-icon" />
                                Cargo Transportation
                            </Button>
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-car-side cate-icon" />
                                Transport Repair
                            </Button>
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-star cate-icon" />
                                Event and Promotions
                            </Button>
                        </div>
                        <div className="categories-list-row">
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-desktop cate-icon" />
                                Computer
                            </Button>
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-laptop-code cate-icon" />
                                Software Development
                            </Button>
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-pen-fancy cate-icon" />
                                Design
                            </Button>
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-camera-retro cate-icon" />
                                Photo, Video and Audio
                            </Button>
                        </div>
                        <div className="categories-list-row">
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-hammer cate-icon" />
                                Repair and Construction
                            </Button>
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-broom cate-icon" />
                                Cleaning and Household
                            </Button>
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-plug cate-icon" />
                                Installation
                            </Button>
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-laptop cate-icon" />
                                Repair of Digital Equipment
                            </Button>
                        </div>
                        <div className="categories-list-row">
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-headset cate-icon" />
                                Virtual Assistant
                            </Button>
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-face-smile-beam cate-icon" />
                                Beauty and Health
                            </Button>
                            <Button
                                className="btn"
                                buttonStyle="btn--category"
                                buttonSize="btn--large"
                            >
                                <i className="fa-solid fa-book cate-icon" />
                                Tutors and Training
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categrories;
