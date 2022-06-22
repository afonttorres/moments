import React, { useState } from "react";
import commentsData from '../../mockComments.json'
import { ViewContainer, NoScrollContainer, View } from "../../pages/Styles.styled";
import { DCImg, DCImgCol, DCInfoCol, DCMainRow } from "./Cards.styled";
import { InlineDesc } from '../InlineData/InlineDesc';
import { InlineInfo } from '../InlineData/InlineInfo';
import { Comments } from "../Comments/Comments";


export const DetailCardDT = (props) => {

    const [comments, setComment] = useState(commentsData);

    return (
        <ViewContainer id="DetailCardDT">
            <DCMainRow>
                <DCImgCol>
                    <DCImg imgUrl={props.moment.imgUrl} />
                </DCImgCol>
                <DCInfoCol>
                    <InlineInfo moment={props.moment} update={props.update} erase={props.erase} />
                    <InlineDesc data={props.moment} />
                    <Comments comments={comments} />
                    <noscript>input</noscript>
                </DCInfoCol>
            </DCMainRow>
        </ViewContainer>

    )
}