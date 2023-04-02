import { useState } from "react";

import { Button } from "../../Button";
import ModalReviewPerformer from "../../modals/ModalReviewPerformer";

function PerformerReview(props) {
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
                Write Review For Performer
            </Button>

            <ModalReviewPerformer
                onClose={() => setShow(false)}
                show={show}
            />
        </>
    )
}

export default PerformerReview;