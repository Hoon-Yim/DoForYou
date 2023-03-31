import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import ModalInterest from "../modals/ModalInterest";

function InterestedBtn() {
    const [show, setShow] = useState(false);

    const AlertInterestBtn = styled.div`
        display: flex;
        justify-content: center;
        margin: 2rem 2rem 0;
    `;
    const InterestedBtn = styled.div`
        width: 100%;
    `;
    return (
        <AlertInterestBtn>
            <InterestedBtn>
                <Button
                    buttonStyle="btn--primary-yellow"
                    buttonSize="btn--wide-bold"
                    buttonRadius="btn--half-rounded"
                    onClick={() => setShow(true)}
                >
                    I'M INTERESTED
                </Button>
            </InterestedBtn>
            <ModalInterest onClose={() => setShow(false)} show={show} />
        </AlertInterestBtn>
    );
}

export default InterestedBtn;
