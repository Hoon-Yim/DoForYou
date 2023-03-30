import React from "react";

function ContactPhoto() {
    return (
        <>
            <div
                className="contact-photo-box"
                style={{
                    backgroundColor: "var(--secondary-light)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div
                    className="contact-photo"
                    style={{
                        textAlign: "center",
                        width: "100%",
                    }}
                >
                    User
                </div>
            </div>
        </>
    );
}

export default ContactPhoto;
