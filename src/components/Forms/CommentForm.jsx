import React, { useState } from "react";
import { formatUtil } from "../../utils/format";
import { CancelButton } from "../Buttons";
import { Button } from "../Buttons/Buttons.styled";
import { ComBar, ComForm, FCancelCol, FIconCol, Input } from "./Forms.styled";
import { validationUtil } from "../../utils/validation";

export const CommentForm = (props) => {
    const [comment, setComment] = useState('');
    const [isCancelled, setIsCancelled] = useState(false);

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        setIsCancelled(false);
        e.preventDefault();
        if (!sanitize()) return;
        let newComment = { comment: comment.toLocaleLowerCase().trim(), momentId: props.moment.id }
        props.createComment(newComment);
        resetValues();
    }

    const sanitize = () => {
        if (!validationUtil.validationSum(comment, 'comment')) return true;
        if (isCancelled) return;
        props.openModal(validationUtil.validationSum(comment, 'comment'));
    }

    const resetValues = () => {
        setComment('');
    }

    const cancel = () => {
        resetValues();
        setIsCancelled(true);
    }

    return (
        <ComForm onSubmit={handleSubmit}>
            <ComBar height={'fit-content'}>
                <Input
                    onChange={handleChange}
                    typeof="text"
                    name="comment"
                    placeholder={formatUtil.capitalize("Type your comment!")}
                    value={comment}
                />

                <FCancelCol>
                    <CancelButton type='button' action={cancel} />
                </FCancelCol>
                <FIconCol>
                    <Button type="submit"><i className="fa-solid fa-location-arrow"></i></Button>
                </FIconCol>
            </ComBar>
        </ComForm>
    );
}