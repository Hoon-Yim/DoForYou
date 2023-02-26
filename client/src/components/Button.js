import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = [
    "btn--primary-yellow",
    "btn--primary-blue",
    "btn--white",
    "btn--secondary-dark",
    "btn--cancel",
    "btn--login",
    "btn--outline",
    "btn--category",
];

const SIZES = ["btn--medium-bold", "btn--small", "btn--medium", "btn--large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link /*to="/"*/>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};
