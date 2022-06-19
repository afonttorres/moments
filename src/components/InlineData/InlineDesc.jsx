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
    const maxLength = 40;

    useEffect(() => {
        shortenText();
    }, [])

    useEffect(() => {
    }, [isShorter])

    const shortenText = () => {
        let shorten = generalServices.shortenText(mainText, maxLength);
        if (mainText == shorten) return;
        setMainText(shorten);
        setIsShorter(true);
    }

    const lengthenText = () => {
        setMainText(data["comment"] || data["description"]);
        setIsShorter(false);
    }

    const changeDisplay = (e) => {
        console.log(e.target.innerHTML.length)
    }

    const toggleExpand = (event) => {
        !isShorter ? shortenText(event) : lengthenText(event);
        changeDisplay(event)
    }


    return (
        <InlineCont id="InlineDesc">
            <ButtonCol>
                <Avatar data={data} />
            </ButtonCol>
            <InfoCol>
                <InfoRow>
                    <TextLine><TextBold>{data.user}</TextBold>&nbsp;<DetailTextCapi onClick={toggleExpand}>{generalServices.capitalize(mainText)}</DetailTextCapi></TextLine>
                </InfoRow>
            </InfoCol>
            <ButtonCol>
                {data.description ? null : <LikeButton isLiked={data.isLiked} size={'var(--font-size-icon-small)'} />}
            </ButtonCol>
        </InlineCont>

    )
}