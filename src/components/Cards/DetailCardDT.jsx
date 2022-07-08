import React, { useState } from "react";
import commentsData from '../../mockComments.json'
import { ViewContainer, NoScrollContainer, View, MainContainer } from "../../pages/Styles.styled";
import { DCImg, DCImgCol, DCInfoCol, DCMainRow } from "./Cards.styled";
import { InlineDesc } from '../InlineData/InlineDesc';
import { InlineInfo } from '../InlineData/InlineInfo';
import { Comments } from "../Comments/Comments";
import { InlineButtons } from '../InlineButtons/InlineButtons';
import { CommentForm } from "../Forms/CommentForm";


export const DetailCardDT = (props) => {
    const [comments, setComment] = useState(commentsData);

    return (
        <MainContainer id="DetailCardDT">
            <DCMainRow>
                <DCImgCol>
                    <DCImg imgUrl={props.moment.imgUrl} />
                </DCImgCol>
                <DCInfoCol>
                    <InlineInfo moment={props.moment} update={props.update} erase={props.erase} />
                    <InlineDesc data={props.moment} />
                    {props.comments.length >= 1 ? <Comments comments={props.comments} /> : <Comments comments={comments} />}
                    <InlineButtons moment={props.moment} width={'90%'} like={props.like} save={props.save} />
                    <CommentForm moment={props.moment} createComment={props.createComment}/>
                </DCInfoCol>
            </DCMainRow>
        </MainContainer>

    )
}