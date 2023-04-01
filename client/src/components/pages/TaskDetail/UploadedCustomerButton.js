import { useState } from "react";

import { Button } from "../../Button";
import ModalCancel from "../../modals/ModalCancel";

function UploadedCustomerButton() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button
                buttonStyle="btn--primary-yellow"
                buttonSize="btn--large-bold"
                buttonRadius="btn--half-rounded"
                type="submit"
                onClick={() => setShow(true)}
            >
                Cancel
            </Button>

            <ModalCancel
                onClose={() => setShow(false)}
                show={show}
            />
        </>
    )
}

export default UploadedCustomerButton;