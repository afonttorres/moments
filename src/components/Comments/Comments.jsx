import React, { useEffect } from "react";
import { CommentsCont } from "./Comments.styled";
import { InlineDesc } from "../InlineData/InlineDesc";
import { CommentForm } from "../Forms/CommentForm";
import { commentAPIService } from "../../services/commentAPIService";

export const Comments = (props) => {

    return (
        <>
            <CommentsCont>{props.comments.map((comment, key) => <InlineDesc key={key} data={comment}/>).reverse()}
            </CommentsCont>
        </>
    )
}