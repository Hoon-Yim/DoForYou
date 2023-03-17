import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../App.css";
import { Button } from "../../Button";
import "./BecomePerformer.css";

function BecomePerformer() {
    const navigate = useNavigate();
    const backToMain = () => {
        navigate("/");
    };

    return (
        <div className="performer">
            <div className="nav-small">
                <div className="nav-small-left">
                    <Link to="/" className="back-arrow">
                        <i className="fa-solid fa-arrow-left fa-2x" />
                    </Link>
                    <Link to="/" className="back-to-main" id="btn-register">
                        BACK
                    </Link>
                </div>
                <div className="nav-small-right">
                    <Link to="/about" className="go-to-another-step">
                        ABOUT US
                    </Link>
                </div>
            </div>

            <div className="performer-container">
                <div className="performer-wrapper">
                    <div className="performer-wrapper-left">
                        <div className="performer-wrapper-left-text">
                            <div className="performer-wrapper-left-text-box">
                                <div className="performer-wrapper-left-text-main">
                                    3234 Tasks are waiting for performers!
                                </div>
                                <div className="performer-wrapper-left-text-sub">
                                    Please answer all questions in the form.
                                </div>
                                <div className="performer-wrapper-left-text-sub">
                                    to help others with your own skills.
                                </div>
                                <div className="performer-wrapper-left-text-sub">
                                    It will take less than 5 minutes.
                                </div>
                            </div>
                        </div>

                        <div className="performer-image">
                            <div className="performer-image-box">
                                <img
                                    className="performer-image-png"
                                    src={
                                        process.env.PUBLIC_URL +
                                        "images/become-performer.png"
                                    }
                                    alt="become-performer"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="performer-wrapper-right">
                        <div className="performer-wrapper-outline">
                            <div className="performer-content">
                                <div className="performer-title">
                                    <h1>Tell us about Yourself</h1>
                                </div>
                                <div className="performer-form">
                                    <form /*onSubmit={handleSubmit}*/>
                                        <div className="info-combine">
                                            <div className="info-combine-left">
                                                <div className="performer-input-field">
                                                    <div className="performer-input-label">
                                                        First Name
                                                    </div>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="info-combine-center">
                                                <div className="performer-input-field">
                                                    <div className="performer-input-label">
                                                        Last Name
                                                    </div>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="info-combine-right">
                                                <div className="performer-input-field">
                                                    <div className="performer-input-label">
                                                        Date of Birth
                                                    </div>
                                                    <input type="date" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="email-phone-combine">
                                            <div className="email-phone-combine-left">
                                                <div className="performer-input-field">
                                                    <div className="performer-input-label">
                                                        Email
                                                    </div>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="email-phone-combine-right">
                                                <div className="performer-input-field">
                                                    <div className="performer-input-label">
                                                        Phone
                                                    </div>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="performer-input-field">
                                            <div className="performer-label-combine">
                                                <div className="performer-input-label">
                                                    Categories
                                                </div>
                                                <div className="performer-input-sub-label">
                                                    Select categories you're
                                                    interested in
                                                </div>
                                            </div>
                                            <div className="categories-field">
                                                <div className="categories-field-list">
                                                    <div className="performer-categories-list-row">
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-box cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Courier
                                                                    Services
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-truck cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Cargo
                                                                    Transportation
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-car-side cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Transport
                                                                    Repair
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="performer-categories-list-row">
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-desktop cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Computer
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-laptop-code cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Software
                                                                    Development
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="performer-categories-list-row">
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-pen-fancy cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Design
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-camera-retro cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Photo, Video
                                                                    and Audio
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-star cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Event and
                                                                    Promotions
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="performer-categories-list-row">
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-hammer cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Repair and
                                                                    Construction
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-broom cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Cleaning and
                                                                    Household
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="performer-categories-list-row">
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-plug cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Installation
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-laptop cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Repair of
                                                                    Digital
                                                                    Equipment
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="performer-categories-list-row">
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-headset cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Virtual
                                                                    Assistant
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-face-smile-beam cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Beauty and
                                                                    Health
                                                                </div>
                                                            </button>
                                                        </div>
                                                        <div className="performer-categories-btn-box">
                                                            <button className="performer-categories-btn">
                                                                <i className="fa-solid fa-book cate-icon cate-icon-size" />
                                                                <div className="cate-icon-small">
                                                                    Tutors and
                                                                    Training
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="performer-input-field">
                                            <div className="performer-label-combine">
                                                <div className="performer-input-label">
                                                    Share your experience
                                                </div>
                                                <div className="performer-input-sub-label">
                                                    Appeal yourself
                                                </div>
                                            </div>

                                            <textarea rows={5} />
                                        </div>

                                        <div className="performer-submit">
                                            <div className="performer-btn-cancel">
                                                <Button
                                                    buttonStyle="btn--cancel"
                                                    buttonSize="btn--wide-bold"
                                                    onClick={backToMain}
                                                >
                                                    CANCEL
                                                </Button>
                                            </div>
                                            <div className="performer-btn-submit">
                                                <Button
                                                    buttonStyle="btn--primary-yellow"
                                                    buttonSize="btn--wide-bold"
                                                    type="submit"
                                                >
                                                    SUBMIT
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BecomePerformer;
