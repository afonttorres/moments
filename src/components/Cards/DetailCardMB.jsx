import React, { useState } from "react";
import commentsData from '../../mockComments.json'
import { Img, View } from "../../pages/Styles.styled";
import { MCImgRow, MCInfoRow } from "./Cards.styled";
import { InlineDesc } from '../InlineData/InlineDesc';
import { Comments } from "../Comments/Comments";
import { InlineInfo } from "../InlineData/InlineInfo";

export const DetailCardMB = (props) => {
    const [comments, setComment] = useState(commentsData);
    console.log(props)
    return (
            <View id="DetailCardMB" gap={'1%'}>
                <MCInfoRow>
                    <InlineInfo moment={props.moment} update={props.update} erase={props.erase}/>
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