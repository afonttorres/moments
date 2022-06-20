import React, { useEffect, useState } from "react";
import { AvatarImg, BorderContainer, CircleContainer } from "./Avatar.styled";

export const Avatar = (props) => {

    const [data, setData] = useState(props.data);

    return (
        <CircleContainer width={props.width}>
            <BorderContainer>
                <AvatarImg imgUrl={data.avatarUrl} />
            </BorderContainer>
        </CircleContainer>
    )
}