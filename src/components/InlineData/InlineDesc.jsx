import React, { useState, useEffect } from "react";
import { DetailTextCapi, TextBold, TextLine } from "../../pages/Styles.styled";
import { generalServices } from "../../services/generalServices";
import { Avatar } from "../Avatar/Avatar";
import { LikeButton } from "../Buttons";
import { ButtonCol, InfoCol, InfoRow, InlineCont } from "./InlineData.styled";

export const InlineDesc = (props) => {
    const [data, setData] = useState(props.data);
    const [mainText, setMainText] = useState(data["comment"] || data["description"]);
    const [isShorter, setIsShorter] = useState(false);
    const [style, setStyle] = useState();
    const maxLength = 40;

    useEffect(() => {
        shortenText();
        setStyle();
    }, [])

    useEffect(() => {
        shortenText();
        setStyle();
    }, [props])

    useEffect(() => {
    }, [isShorter])

    const shortenText = () => {
        let shorten = generalServices.shortenText(mainText, maxLength);
        if (mainText == shorten) return;
        setMainText(shorten);
        setIsShorter(true);
        setStyle();
    }

    const lengthenText = () => {
        setMainText(data["comment"] || data["description"]);
        setIsShorter(false);
        setStyle({ overflowY: 'scroll', height: '5vh', paddingRight: '5%' });
    }

    const toggleExpand = () => {
        !isShorter ? shortenText() : lengthenText();
    }

    return (
        <InlineCont id="InlineDesc">
            <ButtonCol>
                <Avatar data={data} width={'40%'} />
            </ButtonCol>
            <InfoCol>
                <InfoRow>
                    <TextLine style={style}><TextBold>{data.user.alias}</TextBold>&nbsp;<DetailTextCapi onClick={toggleExpand}>{generalServices.capitalize(mainText)}</DetailTextCapi></TextLine>
                </InfoRow>
            </InfoCol>
            <ButtonCol>
                {data.description ? null : <LikeButton data={data.isLiked} size={'var(--font-size-icon-small)'} />}
            </ButtonCol>
        </InlineCont>

    )
}