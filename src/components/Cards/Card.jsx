import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { generalServices } from "../../services/generalServices";
import { TitleRow, ButtonsRow, ImgRow, InfoRow, SCard } from "./Cards.styled";
import { TextBold, Img, TextLine, TextCapi } from "../../pages/Styles.styled";
import { InlineButtons } from "../InlineButtons/InlineButtons";
import { InlineInfo } from "../InlineData/InlineInfo";


export const Card = (props) => {

    const [isShorter, setIsShorter] = useState(false);
    const [text, setText] = useState();
    const [style, setStyle] = useState();
    const maxLength = 40;

    useEffect(() => {
        shortenText();
    }, [])

    useEffect(() => {
        shortenText();
    }, [props.moment]);

    useEffect(() => {
    }, [isShorter]);

    const shortenText = () => {
        setText(props.moment.description);
        let shorten = generalServices.shortenText(props.moment.description, maxLength);
        if (text == shorten) return;
        setIsShorter(true);
        setStyle();
        setText(generalServices.capitalize(shorten));
    }

    const lengthenText = () => {
        setIsShorter(false);
        setStyle({ overflowY: 'scroll', height: '100%', paddingRight: '5%' });
        setText(generalServices.capitalize(props.moment.description))
    }


    const toggleExpand = () => {
        !isShorter ? shortenText() : lengthenText();
    }

    return (
        <SCard>

            <InfoRow>
                <InlineInfo moment={props.moment} location={props.location} update={props.update} erase={props.erase} />
            </InfoRow>

            <ImgRow>
                <Link to={`/${props.location ? props.location : 'home'}/detail/${props.moment.id}`}>
                    <Img imgUrl={props.moment.imgUrl} />
                </Link>
            </ImgRow>

            <TitleRow>
                <TextLine style={style}><TextBold>{props.moment.user.alias}</TextBold>&nbsp;<TextCapi onClick={toggleExpand}>{text}</TextCapi></TextLine>
            </TitleRow>

            <ButtonsRow>
                <InlineButtons moment={props.moment} like={props.like} save={props.save} />
            </ButtonsRow>
        </SCard>
    )
}