import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import ModalReviewPerformer from "../modals/ModalReviewPerformer";

function WriteReviewAboutPerformerBtn() {
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
                    WRITE REVIEW
                </Button>
            </WriteReviewBtn>
            <ModalReviewPerformer onClose={() => setShow(false)} show={show} />
        </CompletedDetailsBtn>
    );
}

export default WriteReviewAboutPerformerBtn;
