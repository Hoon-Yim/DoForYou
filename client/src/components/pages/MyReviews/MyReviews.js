import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./MyReviews.css";

function MyReviews() {
    return (
        <>
            <Navbar />
            <div className="my-reviews">
                <div className="my-reviews-container">
                    <div className="my-reviews-wrapper">
                        <div className="my-reviews-wrapper-left">
                            <div className="my-reviews-wrapper-left-section-title">
                                <div className="my-reviews-wrapper-left-section-profile">
                                    <Link to="/my-profile">Profile</Link>
                                </div>
                                <div className="my-reviews-wrapper-left-section-reviews">
                                    <Link to="/my-reviews">Reviews</Link>
                                </div>
                            </div>
                            <div className="my-reviews-as-customer">
                                <div className="my-reviews-as-customer-title">
                                    As a Customer
                                </div>
                                <div className="my-reviews-as-customer-evaluation">
                                    <div className="my-reviews-as-customer-evaluation-good-section">
                                        <div className="my-reviews-as-customer-evaluation-good-thumbs-section">
                                            <div className="my-reviews-as-customer-evaluation-good-number">
                                                32
                                            </div>
                                            <div className="my-reviews-as-customer-evaluation-good-thumbs">
                                                <i class="fa-regular fa-thumbs-up fa-2x my-reviews-thumbs-up" />
                                            </div>
                                        </div>
                                        <div className="my-reviews-as-customer-evaluation-good-keywords">
                                            <div className="evaluation-good">
                                                <div className="evaluation-good-keyword">
                                                    <div className="evaluation-good-keyword-punctual-payment">
                                                        Punctual Payment
                                                    </div>
                                                    <div className="evaluation-good-keyword-number">
                                                        16
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="evaluation-good">
                                                <div className="evaluation-good-keyword">
                                                    <div className="evaluation-good-keyword-punctual-payment">
                                                        Friendly
                                                    </div>
                                                    <div className="evaluation-good-keyword-number">
                                                        12
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="evaluation-good">
                                                <div className="evaluation-good-keyword">
                                                    <div className="evaluation-good-keyword-punctual-payment">
                                                        Great Communication
                                                    </div>
                                                    <div className="evaluation-good-keyword-number">
                                                        9
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="evaluation-good">
                                                <div className="evaluation-good-keyword">
                                                    <div className="evaluation-good-keyword-punctual-payment">
                                                        Positive
                                                    </div>
                                                    <div className="evaluation-good-keyword-number">
                                                        5
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-reviews-as-customer-evaluation-bad-section">
                                        <div className="my-reviews-as-customer-evaluation-bad-thumbs-section">
                                            <div className="my-reviews-as-customer-evaluation-bad-thumbs">
                                                <i class="fa-regular fa-thumbs-down fa-2x my-reviews-thumbs-down" />
                                            </div>
                                            <div className="my-reviews-as-customer-evaluation-bad-number">
                                                2
                                            </div>
                                        </div>
                                        <div className="my-reviews-as-customer-evaluation-bad-keywords">
                                            <div className="evaluation-bad">
                                                <div className="evaluation-bad-keyword">
                                                    <div className="evaluation-bad-keyword-number">
                                                        2
                                                    </div>
                                                    <div className="evaluation-bad-keyword-punctual-payment">
                                                        Lack of Description
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="evaluation-bad">
                                                <div className="evaluation-bad-keyword">
                                                    <div className="evaluation-bad-keyword-number">
                                                        1
                                                    </div>
                                                    <div className="evaluation-bad-keyword-punctual-payment">
                                                        Negative
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-reviews-as-performer">
                                <div className="my-reviews-as-performer-title">
                                    As a Performer
                                </div>
                                <div className="my-reviews-as-performer-reviews">
                                    {/* Reviews 1 */}
                                    <div className="my-reviews-as-performer-review-box">
                                        <div className="my-reviews-as-performer-review-left">
                                            <div className="my-reviews-as-performer-review-stars">
                                                <div className="review-stars">
                                                    <i class="fa-solid fa-star star-icon" />
                                                    <i class="fa-solid fa-star star-icon" />
                                                    <i class="fa-solid fa-star star-icon" />
                                                    <i class="fa-solid fa-star-half-stroke star-icon" />
                                                    <i class="fa-regular fa-star star-end-icon" />
                                                </div>
                                                <div className="reviews-numbers">
                                                    <div className="reviews-num">
                                                        3.5
                                                    </div>
                                                    <div className="reviews-out-of-num">
                                                        / 5
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-reviews-as-performer-review-bottom">
                                                <div className="my-reviews-as-performer-review-writer">
                                                    Kaia Ko
                                                </div>
                                                <div className="my-reviews-as-performer-review-date">
                                                    Nov 17, 2022
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-reviews-as-performer-review-right">
                                            <div className="my-reviews-as-performer-review-title">
                                                Make a website for an online
                                                store of building materials
                                            </div>
                                            <div className="my-reviews-as-performer-review-desc">
                                                I recommend this star to
                                                everyone. The website was on
                                                time, very quickly, efficiently,
                                                and as I wanted. He is really
                                                detailed person and listened
                                                carefully the request from me. I
                                                hope we will corporate further.
                                            </div>
                                        </div>
                                    </div>
                                    {/* Reviews 2 */}
                                    <div className="my-reviews-as-performer-review-box">
                                        <div className="my-reviews-as-performer-review-left">
                                            <div className="my-reviews-as-performer-review-stars">
                                                <div className="review-stars">
                                                    <i class="fa-solid fa-star star-icon" />
                                                    <i class="fa-solid fa-star star-icon" />
                                                    <i class="fa-solid fa-star star-icon" />
                                                    <i class="fa-solid fa-star-half-stroke star-icon" />
                                                    <i class="fa-regular fa-star star-end-icon" />
                                                </div>
                                                <div className="reviews-numbers">
                                                    <div className="reviews-num">
                                                        3.5
                                                    </div>
                                                    <div className="reviews-out-of-num">
                                                        / 5
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-reviews-as-performer-review-bottom">
                                                <div className="my-reviews-as-performer-review-writer">
                                                    Kaia Ko
                                                </div>
                                                <div className="my-reviews-as-performer-review-date">
                                                    Nov 17, 2022
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-reviews-as-performer-review-right">
                                            <div className="my-reviews-as-performer-review-title">
                                                Make a website for an online
                                                store of building materials
                                            </div>
                                            <div className="my-reviews-as-performer-review-desc">
                                                I recommend this star to
                                                everyone. The website was on
                                                time, very quickly, efficiently,
                                                and as I wanted. He is really
                                                detailed person and listened
                                                carefully the request from me. I
                                                hope we will corporate further.
                                            </div>
                                        </div>
                                    </div>
                                    {/* Reviews 3 */}
                                    <div className="my-reviews-as-performer-review-box">
                                        <div className="my-reviews-as-performer-review-left">
                                            <div className="my-reviews-as-performer-review-stars">
                                                <div className="review-stars">
                                                    <i class="fa-solid fa-star star-icon" />
                                                    <i class="fa-solid fa-star star-icon" />
                                                    <i class="fa-solid fa-star star-icon" />
                                                    <i class="fa-solid fa-star-half-stroke star-icon" />
                                                    <i class="fa-regular fa-star star-end-icon" />
                                                </div>
                                                <div className="reviews-numbers">
                                                    <div className="reviews-num">
                                                        3.5
                                                    </div>
                                                    <div className="reviews-out-of-num">
                                                        / 5
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-reviews-as-performer-review-bottom">
                                                <div className="my-reviews-as-performer-review-writer">
                                                    Kaia Ko
                                                </div>
                                                <div className="my-reviews-as-performer-review-date">
                                                    Nov 17, 2022
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-reviews-as-performer-review-right">
                                            <div className="my-reviews-as-performer-review-title">
                                                Make a website for an online
                                                store of building materials
                                            </div>
                                            <div className="my-reviews-as-performer-review-desc">
                                                I recommend this star to
                                                everyone. The website was on
                                                time, very quickly, efficiently,
                                                and as I wanted. He is really
                                                detailed person and listened
                                                carefully the request from me. I
                                                hope we will corporate further.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-reviews-wrapper-right">
                            <div className="my-reviews-wrapper-right-profile-box">
                                <div className="my-reviews-wrapper-right-profile-photo">
                                    <div className="my-reviews-wrapper-right-profile-photo-image">
                                        <img
                                            src="images/profile/SY.png"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MyReviews;
