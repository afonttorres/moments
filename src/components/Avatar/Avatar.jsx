import React, { useEffect, useState } from "react";
import { AvatarImg, BorderContainer, CircleContainer } from "./Avatar.styled";

export const Avatar = (props) => {
    return (
        <CircleContainer width={props.width}>
            <BorderContainer>
                <AvatarImg imgUrl={props.data.avatarUrl} />
            </BorderContainer>
        </CircleContainer>
    )
}