import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AvatarImg, BorderContainer, CircleContainer } from "./Avatar.styled";

export const Avatar = (props) => {

    const navigate = useNavigate();

    return (
        <CircleContainer width={props.width}>
            <BorderContainer>
                <AvatarImg onClick={() => navigate(`/profile/${props.user.id}`)} imgUrl={props.user.avatarUrl} />
            </BorderContainer>
        </CircleContainer>
    )
}