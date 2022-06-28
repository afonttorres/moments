import React, { useState, useEffect } from "react";
import { DetailTextCapi, TextBold, TextLine } from "../../pages/Styles.styled";
import { generalServices } from "../../services/generalServices";
import { Avatar } from "../Avatar/Avatar";
import { LikeButton } from "../Buttons";
import { ButtonCol, InfoCol, InfoRow, InlineCont } from "./InlineData.styled";

export const InlineDesc = (props) => {

    const [text, setText] = useState();
    const [isShorter, setIsShorter] = useState(false);
    const [style, setStyle] = useState();
    const maxLength = 40;

    useEffect(() => {
        shortenText();
    }, [])

    useEffect(() => {
        shortenText();
    }, [props.data])

    useEffect(() => {
    }, [isShorter])

    const shortenText = () => {
        setText(generalServices.capitalize(props.data.description || props.data.comment));
        let shorten = generalServices.shortenText(props.data.description || props.data.comment, maxLength);
        if (text == shorten) return;
        setIsShorter(true);
        setStyle();
        setText(generalServices.capitalize(shorten));
    }

    const lengthenText = () => {
        setIsShorter(false);
        setStyle({ overflowY: 'scroll', height: '5vh', paddingRight: '5%' });
        setText(generalServices.capitalize(props.data.description || props.data.comment));
    }

    const toggleExpand = () => {
        !isShorter ? shortenText() : lengthenText();
    }

    return (
        <InlineCont id="InlineDesc">
            <ButtonCol>
                <Avatar data={props.data} width={'40%'} />
            </ButtonCol>
            <InfoCol>
                <InfoRow>
                    <TextLine style={style}><TextBold>{props.data.user.alias}</TextBold>&nbsp;<DetailTextCapi onClick={toggleExpand}>{text}</DetailTextCapi></TextLine>
                </InfoRow>
            </InfoCol>
            <ButtonCol>
                {props.data.description ? null : <LikeButton data={props.data.isLiked} size={'var(--font-size-icon-small)'} />}
            </ButtonCol>
        </InlineCont>

    )
}