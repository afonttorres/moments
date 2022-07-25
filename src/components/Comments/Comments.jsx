import React from "react";
import { CommentsCont } from "./Comments.styled";
import { InlineDesc } from "../InlineData/InlineDesc";

export const Comments = (props) => {

    return (
        <>
            <CommentsCont>{props.comments.map((comment, key) => <InlineDesc key={key} data={comment}/>).reverse()}
            </CommentsCont>
        </>
    )
}