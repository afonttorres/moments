import React, { useState } from "react";
import { formatUtil } from "../../utils/format";
import { CancelButton } from "../Buttons";
import { Button } from "../Buttons/Buttons.styled";
import { ComBar, ComForm, FCancelCol, FIconCol, Input } from "./Forms.styled";
import { InfoModal } from "../Modals/InfoModal";
import { validationUtil } from "../../utils/validation";

export const CommentForm = (props) => {
    const [comment, setComment] = useState('');
    const [msg, setMsg] = useState();

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!sanitize()) return;
        let newComment = { comment: comment.toLocaleLowerCase().trim(), momentId: props.moment.id }
        props.createComment(newComment);
        resetValues();
    }

    const sanitize = () => {
        if (!validationUtil.validationSum(comment, 'comment')) return true;
        openModal(validationUtil.validationSum(comment, 'comment'));
    }

    const resetValues = () => {
        setComment('');
    }

    const cancel = () => {
        resetValues();
    }

    const openModal = (msg) => {
        setMsg(msg);
    }

    const closeModal = () => {
        setMsg();
    }

    return (
        <>
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
                        <CancelButton action={cancel} />
                    </FCancelCol>
                    <FIconCol>
                        <Button type="submit"><i className="fa-solid fa-location-arrow"></i></Button>
                    </FIconCol>
                </ComBar>
            </ComForm>
            <>{msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}</>
        </>

    );
}