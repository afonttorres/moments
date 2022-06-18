import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { CDetailText, CText, TitleRow, SCardAvatar, InfoDataCol, InfoIconsCol, SButton, ButtonsCol, ButtonsRow, ImgRow, InfoRow, SCard } from "./Cards.styled";
import { TextBold, Text, Img } from "../../pages/Pages.styled";
import { Avatar } from '../../components/Avatar/Avatar';
import { InlineInfo } from '../../components/InlineInfo/InlineInfo';


export const Card = (props) => {
    const [moment, setMoment] = useState(props.moment);
    const [buttons, setButtons] = useState([
        { button: props.moment.isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>, content: props.moment.likes }
        , { button: <i className="fa-regular fa-comment-dots"></i>, content: props.moment.comments }
        , { button: props.moment.isSaved ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>, content: props.moment.saves }
    ]);

    return (
        <SCard>



            <InfoRow>
                <InfoIconsCol>
                    <Avatar style={{ width: '60%' }} data={moment} />
                </InfoIconsCol>
                <InfoDataCol>
                    <TextBold>{moment.user}</TextBold>
                    <CDetailText>{moment.location}</CDetailText>
                </InfoDataCol>
                <InfoIconsCol>
                    <SButton><i className="fa-solid fa-ellipsis"></i></SButton>
                </InfoIconsCol>
            </InfoRow>


            <ImgRow>
                <Link to={`/${props.location ? props.location : 'home'}/detail/${moment.id}`}>
                    <Img imgUrl={moment.imgUrl} />
                </Link>
            </ImgRow>

            <TitleRow>
                <TextBold>{moment.user}</TextBold>&nbsp;<CText>{moment.title}</CText>
            </TitleRow>


            <ButtonsRow>{buttons.map((button, key) =>
                <ButtonsCol>
                    <SButton key={key}>{button.button}</SButton>
                    <Text key={key}>{button.content}</Text>
                </ButtonsCol>)}
            </ButtonsRow>
        </SCard>
    )
}