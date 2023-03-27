import React from "react";
import { Button } from "../../Button";
import "./Reviews.css";
// import ReviewsItem from "./ReviewsItem";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

/*
                                <div className="image">
                                    <img src="images/profile/f1.jpg" alt="" />
                                </div>
                                <div className="card-info">
                                    <div className="user-name">
                                        Someone Name
                                    </div>
                                    <div className="user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.5
                                    </div>
                                    <div className="user-completed">
                                        completed ? tasks
                                    </div>
                                    <div className="user-button">
                                        <Button
                                            className="btn"
                                            buttonStyle="btn--secondary-dark"
                                            buttonSize="btn--small"
                                        >
                                            About me
                                        </Button>
                                    </div>
------------------------------------------------------------------------------------------------
                                     <div className="single-testimonial">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley
                                    </p>
                                    <div className="client-info">
                                        <div className="client-pic">
                                            <a href="/">
                                                <img
                                                    src="images/profile/f1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="client-details">
                                            <h6>Victoria K.</h6>
                                            <span>Designer, LLC Team</span>
                                        </div>
                                    </div>
                                </div>
*/

function Reviews() {
    return (
        <div className="reviews">
            <div className="reviews-container">
                <div className="reviews-wrapper">
                    <div className="reviews-title">
                        <h1 className="title-main">Reviews</h1>
                        <h5 className="title-sub">
                            What customers say about our performers?
                        </h5>
                    </div>
                    <div className="reviews-content">
                        {/*<Carousel responsive={responsive}>*/}
                        {/* Review 1*/}
                        <div className="card">
                            <div className="card-content">
                                <div className="single-testimonial">
                                    <div className="testimonial-title">
                                        Repair speaker
                                    </div>
                                    <div className="testimonial-price">
                                        $ 65.00
                                    </div>
                                    <div className="testimonial-desc">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley
                                    </div>
                                    <div className="performer-info">
                                        <div className="performer-pic">
                                            <a href="/">
                                                <img
                                                    src="images/profile/f1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="performer-details">
                                            <div className="user-name">
                                                Victoria K.
                                            </div>
                                            <div className="user-rating">
                                                Rating:
                                                <i className="fas fa-star"></i>
                                                4.5
                                            </div>
                                            <div className="user-completed">
                                                completed <b>21</b> tasks
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Review 2*/}
                        <div className="card">
                            <div className="card-content">
                                <div className="single-testimonial">
                                    <div className="testimonial-title">
                                        Math tutor grade 9
                                    </div>
                                    <div className="testimonial-price">
                                        $ 110.00
                                    </div>
                                    <div className="testimonial-desc">
                                        eveniet ut et voluptates repudiandae
                                        sint et molestiae non recusandae. Itaque
                                        earum rerum hic tenetur a sapiente
                                        delectus, ut aut reiciendis voluptatibus
                                        maiores alias consequatur aut
                                        perferendis doloribus asperiores
                                        repellat.
                                    </div>
                                    <div className="performer-info">
                                        <div className="performer-pic">
                                            <a href="/">
                                                <img
                                                    src="images/profile/f2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="performer-details">
                                            <div className="user-name">
                                                Alex B.
                                            </div>
                                            <div className="user-rating">
                                                Rating:
                                                <i className="fas fa-star"></i>
                                                4.7
                                            </div>
                                            <div className="user-completed">
                                                completed <b>74</b> tasks
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Review 3*/}
                        <div className="card">
                            <div className="card-content">
                                <div className="single-testimonial">
                                    <div className="testimonial-title">
                                        Host for the event
                                    </div>
                                    <div className="testimonial-price">
                                        $ 360.00
                                    </div>
                                    <div className="testimonial-desc">
                                        Quis autem vel eum iure reprehenderit
                                        qui in ea voluptate velit esse quam
                                        nihil molestiae consequatur, vel illum
                                        qui dolorem eum fugiat quo voluptas
                                        nulla pariatur?
                                    </div>
                                    <div className="performer-info">
                                        <div className="performer-pic">
                                            <a href="/">
                                                <img
                                                    src="images/profile/m1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="performer-details">
                                            <div className="user-name">
                                                Dmitry G.
                                            </div>
                                            <div className="user-rating">
                                                Rating:
                                                <i className="fas fa-star"></i>
                                                4.8
                                            </div>
                                            <div className="user-completed">
                                                completed <b>34</b> tasks
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Review 4*/}
                        <div className="card">
                            <div className="card-content">
                                <div className="single-testimonial">
                                    <div className="testimonial-title">
                                        Do hair and make up for party
                                    </div>
                                    <div className="testimonial-price">
                                        $ 90.00
                                    </div>
                                    <div className="testimonial-desc">
                                        Nam libero tempore, cum soluta nobis est
                                        eligendi optio cumque nihil impedit quo
                                        minus id quod maxime placeat facere
                                        possimus, omnis voluptas assumenda est,
                                        omnis dolor repellendus.
                                    </div>
                                    <div className="performer-info">
                                        <div className="performer-pic">
                                            <a href="/">
                                                <img
                                                    src="images/profile/f3.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="performer-details">
                                            <div className="user-name">
                                                Bonnie A.
                                            </div>
                                            <div className="user-rating">
                                                Rating:
                                                <i className="fas fa-star"></i>
                                                4.9
                                            </div>
                                            <div className="user-completed">
                                                completed <b>13</b> tasks
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Review 5*/}
                        <div className="card">
                            <div className="card-content">
                                <div className="single-testimonial">
                                    <div className="testimonial-title">
                                        Simple web design
                                    </div>
                                    <div className="testimonial-price">
                                        $ 120.00
                                    </div>
                                    <div className="testimonial-desc">
                                        At vero eos et accusamus et iusto odio
                                        dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque
                                        corrupti quos dolores et quas molestias
                                        excepturi sint occaecati cupiditate non
                                        provident, similique sunt in culpa qui
                                        officia deserunt mollitia animi
                                    </div>
                                    <div className="performer-info">
                                        <div className="performer-pic">
                                            <a href="/">
                                                <img
                                                    src="images/profile/m3.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="performer-details">
                                            <div className="user-name">
                                                Tom H.
                                            </div>
                                            <div className="user-rating">
                                                Rating:
                                                <i className="fas fa-star"></i>
                                                4.9
                                            </div>
                                            <div className="user-completed">
                                                completed <b>22</b> tasks
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Review 6*/}
                        <div className="card">
                            <div className="card-content">
                                <div className="single-testimonial">
                                    <div className="testimonial-title">
                                        Figure drawing tutor
                                    </div>
                                    <div className="testimonial-price">
                                        $ 320.00
                                    </div>
                                    <div className="testimonial-desc">
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo
                                        inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo.
                                    </div>
                                    <div className="performer-info">
                                        <div className="performer-pic">
                                            <a href="/">
                                                <img
                                                    src="images/profile/f1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="performer-details">
                                            <div className="user-name">
                                                Nadia V.
                                            </div>
                                            <div className="user-rating">
                                                Rating:
                                                <i className="fas fa-star"></i>
                                                4.8
                                            </div>
                                            <div className="user-completed">
                                                completed <b>16</b> tasks
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*</Carousel>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
