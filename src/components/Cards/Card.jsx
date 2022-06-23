import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { generalServices } from "../../services/generalServices";
import { TitleRow, ButtonsRow, ImgRow, InfoRow, SCard } from "./Cards.styled";
import { TextBold, Img, TextLine, TextCapi } from "../../pages/Styles.styled";
import { InlineButtons } from "../InlineButtons/InlineButtons";
import { InlineInfo } from "../InlineData/InlineInfo";


export const Card = (props) => {

    useEffect(() => { }, [props]);

    return (
        <SCard>

            <InfoRow>
                <InlineInfo moment={props.moment} location={props.location} update={props.update} erase={props.erase}/>
            </InfoRow>

            <ImgRow>
                <Link to={`/${props.location ? props.location : 'home'}/detail/${props.moment.id}`}>
                    <Img imgUrl={props.moment.imgUrl} />
                </Link>
            </ImgRow>

            <TitleRow>
                <TextLine><TextBold>{props.moment.user.alias}</TextBold>&nbsp;<TextCapi>{generalServices.capitalize(props.moment.description)}</TextCapi></TextLine>
            </TitleRow>

            <ButtonsRow>
                <InlineButtons moment={props.moment} like={props.like} />
            </ButtonsRow>
        </SCard>
    )
}