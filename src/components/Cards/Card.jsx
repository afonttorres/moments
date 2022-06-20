import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { generalServices } from "../../services/generalServices";
import { TitleRow, ButtonsRow, ImgRow, InfoRow, SCard } from "./Cards.styled";
import { TextBold, Img, TextLine, TextCapi } from "../../pages/Styles.styled";
import { InlineButtons } from "../InlineButtons/InlineButtons.styled";
import { InlineInfo } from "../InlineData/InlineInfo";


export const Card = (props) => {

    useEffect(() => { }, [props.moment])

    return (
        <SCard>

            <InfoRow>
                <InlineInfo moment={props.moment} location={props.location}/>
            </InfoRow>

            <ImgRow>
                <Link to={`/${props.location ? props.location : 'home'}/detail/${props.moment.id}`}>
                    <Img imgUrl={props.moment.imgUrl} />
                </Link>
            </ImgRow>

            <TitleRow>
                <TextLine><TextBold>{props.moment.user}</TextBold>&nbsp;<TextCapi>{generalServices.capitalize(props.moment.title)}</TextCapi></TextLine>
            </TitleRow>

            <ButtonsRow>
                <InlineButtons moment={props.moment} />
            </ButtonsRow>
        </SCard>
    )
}