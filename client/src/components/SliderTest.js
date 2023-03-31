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
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="carousel">
            <div className="slider-name">Carousel Tutorial</div>
            <Slider {...settings}>
                <div className="box">
                    <h3>1</h3>
                </div>
                <div className="box">
                    <h3>2</h3>
                </div>
                <div className="box">
                    <h3>3</h3>
                </div>
                <div className="box">
                    <h3>4</h3>
                </div>
                <div className="box">
                    <h3>5</h3>
                </div>
            </Slider>
        </div>
    );
}

export default SliderTest;