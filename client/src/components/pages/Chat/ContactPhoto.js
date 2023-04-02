import React from "react";
import styled from "styled-components";

function ContactPhoto() {
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
    return (
        <>
            <ContactPhotoBox>
                <ContactPhoto>
                    <i class="fa-solid fa-user fa-xl" />
                </ContactPhoto>
            </ContactPhotoBox>
        </>
    );
}

export default ContactPhoto;
