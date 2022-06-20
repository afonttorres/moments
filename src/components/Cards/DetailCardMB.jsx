import React, { useState } from "react";
import commentsData from '../../mockComments.json'
import { Img, View } from "../../pages/Styles.styled";
import { MCImgRow, MCCommentsCol, MCInfoRow, MCContainer } from "./Cards.styled";
import { InlineDesc } from '../InlineData/InlineDesc';
import { Comments } from "../Comments/Comments";
import { InlineInfo } from "../InlineData/InlineInfo";

export const DetailCardMB = (props) => {
    const [comments, setComment] = useState(commentsData);

    return (
        <View id="DetailCardMB" gap={'1%'}>
            <MCInfoRow>
                <InlineInfo moment={props.moment} location={props.location}/>
            </MCInfoRow>

            <MCImgRow>
                <Img imgUrl={props.moment.imgUrl} />
            </MCImgRow>

            <MCInfoRow>
                <InlineDesc data={props.moment} />
            </MCInfoRow>
            <Comments comments={comments} />
        </View>
    )
}