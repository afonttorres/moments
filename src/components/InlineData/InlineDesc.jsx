import React, { useState, useEffect } from "react";
import { DetailTextCapi, TextBold, TextLine } from "../../pages/Styles.styled";
import { formatUtil } from '../../utils/format';
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

    const shortenText = () => {
        setText(formatUtil.capitalize(props.data.description || props.data.comment));
        let shorten = formatUtil.shortenText(props.data.description || props.data.comment, maxLength);
        if (text === shorten) return;
        setIsShorter(true);
        setStyle();
        setText(formatUtil.capitalize(shorten));
    }

    const lengthenText = () => {
        let data = props.data.description ? props.data.description : props.data.comment;
        if (data.length <= maxLength) return;
        setStyle({ overflowY: 'scroll', height: '5vh', paddingRight: '5%' });
        setText(formatUtil.capitalize(props.data.description || props.data.comment));
        setIsShorter(false);
    }

    const toggleExpand = () => {
        !isShorter ? shortenText() : lengthenText();
    }

    return (
        <InlineCont id="InlineDesc">
            <ButtonCol>
                <Avatar user={props.data.creator} width={'40%'} />
            </ButtonCol>
            <InfoCol>
                <InfoRow>
                    <TextLine style={style}><TextBold>{props.data.creator.username}</TextBold>&nbsp;<DetailTextCapi onClick={toggleExpand}>{text}</DetailTextCapi></TextLine>
                </InfoRow>
            </InfoCol>
            <ButtonCol>
                {props.data.description ? null : <LikeButton data={props.data} size={'var(--font-size-icon-small)'} />}
            </ButtonCol>
        </InlineCont>

    )
}