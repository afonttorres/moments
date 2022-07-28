import React, { useState } from "react";
import { Img, Touchable, View } from "../../pages/Styles.styled";
import { MCImgRow, MCInfoRow } from "./Cards.styled";
import { InlineDesc } from '../InlineData/InlineDesc';
import { Comments } from "../Comments/Comments";
import { InlineInfo } from "../InlineData/InlineInfo";
import { InlineButtons } from "../InlineButtons/InlineButtons";
import { CommentForm } from "../Forms/CommentForm";

export const DetailCardMB = (props) => {
    const [startTouch, setStartTouch] = useState();

    const setDirection = (e) => {
        const endTouch = e.changedTouches[0].screenY;
        if(startTouch === endTouch || startTouch -20 < endTouch) return;
        startTouch > endTouch ? props.slide('forward') : props.slide('back');
    }

    return (
        <View id="DetailCardMB" gap={'1%'}>
            <Touchable onTouchStart={(e) => setStartTouch(e.changedTouches[0].screenY)} onTouchEnd={setDirection}>
                <MCInfoRow>
                    <InlineInfo moment={props.moment} update={props.update} erase={props.erase} />
                </MCInfoRow>
                <MCImgRow>
                    <Img imgUrl={props.moment.imgUrl} />
                </MCImgRow>
                <InlineButtons moment={props.moment} width={'90%'} like={props.like} save={props.save} />
                <MCInfoRow>
                    <InlineDesc data={props.moment} />
                </MCInfoRow>
            </Touchable>
            {props.comments ? <Comments comments={props.comments} user={props.user} /> : null}
            <CommentForm moment={props.moment} createComment={props.createComment} openModal={props.openModal}/>
        </View>
    )
}