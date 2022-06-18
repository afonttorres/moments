import React, { useState } from "react";
import commentsData from '../../mockComments.json'
import { Col, Row, ViewContainer } from "../../pages/Pages.styled";
import { InlineInfo } from "../InlineInfo/InlineInfo";
import { DCImg, DCImgCol, DCImgInfo, DCMainRow } from "./Cards.styled";

export const DetailCardDT = (props) => {
    const [moment, setMoment] = useState(props.moment);
    const [comments, setComment] = useState(commentsData);

    return (
        <ViewContainer id="DetailCardDT">
            <DCMainRow>
                <DCImgCol>
                    <DCImg imgUrl={moment.imgUrl} />
                </DCImgCol>
                <DCImgInfo>
                    <InlineInfo data={moment} />
                    <>{comments ? comments.map((comment, key) => <InlineInfo key={key} data={comment} />) : null}
                    </>
                </DCImgInfo>
            </DCMainRow>
        </ViewContainer>

    )
}