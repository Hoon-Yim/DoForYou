import React, { useState } from "react";

function NoStarsClicked() {
    const [isOneStarClicked, setIsOneStarClicked] = useState(false);
    const [isTwoStarsClicked, setIsTwoStarsClicked] = useState(false);
    const [isThreeStarsClicked, setIsThreeStarsClicked] = useState(false);
    const [isFourStarsClicked, setIsFourStarsClicked] = useState(false);
    const [isFiveStarsClicked, setIsFiveStarsClicked] = useState(false);
    return (
        <div className="modal-review-performer-stars-box">
            <div className="modal-review-performer-stars">
                <div className="modal-review-performer-star">
                    <i
                        class="fa-regular fa-star fa-xl review-performer-star"
                        onClick={() => setIsOneStarClicked(!isOneStarClicked)}
                    />
                </div>
                <div className="modal-review-performer-star">
                    <i
                        class="fa-regular fa-star fa-xl review-performer-star"
                        onClick={() => setIsTwoStarsClicked(!isTwoStarsClicked)}
                    />
                </div>
                <div className="modal-review-performer-star">
                    <i
                        class="fa-regular fa-star fa-xl review-performer-star"
                        onClick={() =>
                            setIsThreeStarsClicked(!isThreeStarsClicked)
                        }
                    />
                </div>
                <div className="modal-review-performer-star">
                    <i
                        class="fa-regular fa-star fa-xl review-performer-star"
                        onClick={() =>
                            setIsFourStarsClicked(!isFourStarsClicked)
                        }
                    />
                </div>
                <div className="modal-review-performer-star">
                    <i
                        class="fa-regular fa-star fa-xl review-performer-star"
                        onClick={() =>
                            setIsFiveStarsClicked(!isFiveStarsClicked)
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default NoStarsClicked;
