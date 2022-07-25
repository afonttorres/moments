import React from "react";
import { useNavigate } from "react-router-dom";
import { AvatarImg, BorderContainer, CircleContainer } from "./Avatar.styled";

export const Avatar = (props) => {

    const navigate = useNavigate();

    return (
        <CircleContainer width={props.width}>
            <BorderContainer>
                <AvatarImg onClick={() => navigate(`/profile/${props.user.id}`)} imgUrl={props.user.avatarUrl ? props.user.avatarUrl : "https://thumbs.dreamstime.com/b/icono-del-perfil-social-de-anonimos-para-el-profie-la-red-sobre-fondo-color-diversas-aplicaciones-148257454.jpg"} />
            </BorderContainer>
        </CircleContainer>
    )
}