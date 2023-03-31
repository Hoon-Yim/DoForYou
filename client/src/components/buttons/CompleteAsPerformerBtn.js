import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import ModalComplete from "../modals/ModalComplete";
import ModalReviewCustomer from "../modals/ModalReviewCustomer";

function CompleteAsPerformerBtn() {
    const [show, setShow] = useState(false);

    const CompletedDetailsBtn = styled.div`
        display: flex;
        justify-content: center;
        margin: 2rem 2rem 0;
    `;
    const WriteReviewBtn = styled.div`
        width: 100%;
    `;
    return (
        <CompletedDetailsBtn>
            <WriteReviewBtn>
                <Button
                    buttonStyle="btn--primary-yellow"
                    buttonSize="btn--wide-bold"
                    buttonRadius="btn--half-rounded"
                    onClick={() => setShow(true)}
                >
                    COMPLETE
                </Button>
            </WriteReviewBtn>
            <ModalReviewCustomer onClose={() => setShow(false)} show={show} />
        </CompletedDetailsBtn>
    );
}

export default CompleteAsPerformerBtn;
