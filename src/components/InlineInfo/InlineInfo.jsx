import React, { useState, useEffect } from "react";
import { DetailTextCapi, Row, TextBold, TextLine } from "../../pages/Pages.styled";
import { generalServices } from "../../services/generalServices";
import { Avatar } from "../Avatar/Avatar";
import { ButtonCol, InfoCol, InfoRow } from "./InlineInfo.styled";

export const InlineInfo = (props) => {
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

    const changeDisplay = (e) =>{
        console.log(e.target.offsetHeight)
    }

    const toggleExpand = (event) => {
        !isShorter ? shortenText(event) : lengthenText(event);
        changeDisplay(event)
    }

    return (
        <Row id="InlineInfo">
            <ButtonCol>
                <Avatar style={{ width: '50%' }} data={data} />
            </ButtonCol>
            <InfoCol>
                <InfoRow>
                    <TextLine><TextBold>{data.user}</TextBold>&nbsp;<DetailTextCapi onClick={toggleExpand}>{mainText}</DetailTextCapi></TextLine>
                </InfoRow>
            </InfoCol>
            <ButtonCol>
                {data.description ? '...' : '(L)'}
            </ButtonCol>
        </Row>

    )
}