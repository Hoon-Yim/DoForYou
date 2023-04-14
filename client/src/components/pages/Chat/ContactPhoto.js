import axios from "axios";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

function ContactPhoto(props) {
    const [user, setUser] = useState({});

    const ContactPhotoBox = styled.div`
        background-color: var(--secondary-light);
        width: 50px;
        height: 50px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    const ContactPhoto = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    `;

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/users/${props.userId}`)
            .then(data => {
                setUser(data.data.user);
            });
    }, []);
    return (
        <>
            <ContactPhotoBox>
                {user.img ? (
                    <img
                        src={`http://localhost:8000/api/users/profile/${user._id}`}
                        alt="profile"
                    />
                ) : (
                    <img src="images/profile/default.png" alt="default profile" />
                )}
            </ContactPhotoBox>
        </>
    );
}

export default ContactPhoto;
