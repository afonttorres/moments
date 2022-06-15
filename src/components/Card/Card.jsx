import React, { useEffect, useState } from "react";
import { SCardAvatar, InfoDataCol, InfoIconsCol, Text, SButton, ButtonsCol, ButtonsRow, ImgRow, InfoRow, SCard, SCardCol, UserText, LocationText } from "./Card.styled";


export const Card = (props) => {
    const [moment, setMoment] = useState(props.moment);
    const [buttons, setButtons] = useState([
        { button: props.moment.isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>, content: props.moment.likes }
        , { button: <i className="fa-regular fa-comment-dots"></i>, content: props.moment.comments }
        , { button: <i className="fa-regular fa-bookmark"></i>, content: props.moment.saves }
    ]);


    console.log(moment.isLiked);
    return (
        <SCard>
            <InfoRow>
                <InfoIconsCol>
                    <SCardAvatar imgUrl={moment.avatar} />
                </InfoIconsCol>
                <InfoDataCol>
                    <UserText>{moment.user}</UserText>
                    <LocationText>{moment.location}</LocationText>
                </InfoDataCol>
                <InfoIconsCol>
                    <SButton><i className="fa-solid fa-ellipsis"></i></SButton>
                </InfoIconsCol>
            </InfoRow>
            <ImgRow imgUrl={moment.imgUrl}>
            </ImgRow>
            <ButtonsRow>{buttons.map((button, key) =>
                <ButtonsCol>
                    <SButton key={key}>{button.button}</SButton>
                    <Text key={key}>{button.content}</Text>
                </ButtonsCol>)}
            </ButtonsRow>
        </SCard>
    )
}