import React, { useState } from "react";
import { formatUtil } from "../../utils/format";
import { CancelButton } from "../Buttons";
import { Button } from "../Buttons/Buttons.styled";
import { ComBar, ComForm, FCancelCol, FIconCol, Input } from "./Forms.styled";
import {regexUtil} from '../../utils/regex';

export const CommentForm = (props) => {
    const [comment, setComment] = useState('');

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
        if ((comment === undefined || comment == "")) { return false; }
        if (typeof comment !== 'string' || comment == ' ') { return false; }
        return true;
    }

    const resetValues = () => {
        setComment('');
    }

    const cancel = () => {
        resetValues();
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
                    <CancelButton action={cancel} />
                </FCancelCol>
                <FIconCol>
                    <Button type="submit"><i className="fa-solid fa-location-arrow"></i></Button>
                </FIconCol>
            </ComBar>
        </ComForm>
    );
}