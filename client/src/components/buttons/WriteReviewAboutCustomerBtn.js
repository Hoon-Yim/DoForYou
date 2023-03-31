import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import ModalReviewCustomer from "../modals/ModalReviewCustomer";

function WriteReviewAboutCustomerBtn() {
    const [show, setShow] = useState(false);

    const WriteReviewAboutCustomerBox = styled.div`
        display: flex;
        justify-content: center;
        margin: 2rem 2rem 0;
    `;
    const WriteReviewAboutCustomerBtn = styled.div`
        width: 100%;
    `;

    return (
        <WriteReviewAboutCustomerBox>
            <WriteReviewAboutCustomerBtn>
                <Button
                    buttonStyle="btn--primary-yellow"
                    buttonSize="btn--wide-bold"
                    buttonRadius="btn--half-rounded"
                    onClick={() => setShow(true)}
                >
                    WRITE REVIEW
                </Button>
            </WriteReviewAboutCustomerBtn>
            <ModalReviewCustomer onClose={() => setShow(false)} show={show} />
        </WriteReviewAboutCustomerBox>
    );
}

export default WriteReviewAboutCustomerBtn;
