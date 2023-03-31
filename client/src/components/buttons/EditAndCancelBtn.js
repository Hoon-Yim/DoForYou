import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import ModalCancel from "../modals/ModalCancel";

function EditAndCancelBtn() {
    const [show, setShow] = useState(false);

    const DetailAsCustomerBtns = styled.div`
        display: flex;
        justify-content: center;
        margin: 2rem 2rem 0;
    `;
    const DetailEditBtn = styled.div`
        width: 100%;
    `;
    const DetailCancelBtn = styled.div`
        width: 100%;
        margin-left: 0.5rem;
    `;

    return (
        <DetailAsCustomerBtns>
            <DetailEditBtn>
                <Button
                    buttonStyle="btn--secondary-dark"
                    buttonSize="btn--wide-bold"
                    buttonRadius="btn--half-rounded"
                    type="submit"
                >
                    EDIT
                </Button>
            </DetailEditBtn>
            <DetailCancelBtn>
                <Button
                    buttonStyle="btn--cancel"
                    buttonSize="btn--wide-bold"
                    buttonRadius="btn--half-rounded"
                    onClick={() => setShow(true)}
                >
                    CANCEL
                </Button>
            </DetailCancelBtn>
            <ModalCancel onClose={() => setShow(false)} show={show} />
        </DetailAsCustomerBtns>
    );
}

export default EditAndCancelBtn;
