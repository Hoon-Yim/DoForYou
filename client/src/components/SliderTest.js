import React from "react";
import "./SliderTest.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function SliderTest() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 2100,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 896,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <div className="carousel">
            <Slider {...settings}>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Repair speaker
                                </div>
                                <div className="review-price">$ 65.00</div>
                                <div className="review-desc">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Victoria K.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.5
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>21</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Math tutor grade 9
                                </div>
                                <div className="review-price">$ 110.00</div>
                                <div className="review-desc">
                                    eveniet ut et voluptates repudiandae sint et
                                    molestiae non recusandae. Itaque earum rerum
                                    hic tenetur a sapiente delectus, ut aut
                                    reiciendis voluptatibus maiores alias
                                    consequatur aut perferendis doloribus
                                    asperiores repellat
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f2.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Alex B.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.7
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>74</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Repair speaker
                                </div>
                                <div className="review-price">$ 65.00</div>
                                <div className="review-desc">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Victoria K.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.5
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>21</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Repair speaker
                                </div>
                                <div className="review-price">$ 65.00</div>
                                <div className="review-desc">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Victoria K.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.5
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>21</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Repair speaker
                                </div>
                                <div className="review-price">$ 65.00</div>
                                <div className="review-desc">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Victoria K.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.5
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>21</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Repair speaker
                                </div>
                                <div className="review-price">$ 65.00</div>
                                <div className="review-desc">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Victoria K.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.5
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>21</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Repair speaker
                                </div>
                                <div className="review-price">$ 65.00</div>
                                <div className="review-desc">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Victoria K.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.5
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>21</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Repair speaker
                                </div>
                                <div className="review-price">$ 65.00</div>
                                <div className="review-desc">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Victoria K.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.5
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>21</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Repair speaker
                                </div>
                                <div className="review-price">$ 65.00</div>
                                <div className="review-desc">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Victoria K.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.5
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>21</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Repair speaker
                                </div>
                                <div className="review-price">$ 65.00</div>
                                <div className="review-desc">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Victoria K.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.5
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>21</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SliderTest;
