import { useState } from "react";

import { Button } from "../../Button";
import ModalComplete from "../../modals/ModalComplete";

function AssignedPerformerButton() {
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
                Complete
            </Button>

            <ModalComplete
                onClose={() => setShow(false)}
                show={show}
            />
        </>
    )
}

export default AssignedPerformerButton;