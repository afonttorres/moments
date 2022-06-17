import React, { useState } from "react";
import { Home } from "../../pages/Home/Home";
import { Profile } from '../../pages/Profile/Profile';

import { Text, OverlayContainer, NoScrollContainer, MainContainer, CloseButton } from "../../pages/Pages.styled";

export const VDetailDT = (props) => {
    const [location, setLocation] = useState(window.location.pathname)
    return (
        <MainContainer>
            <NoScrollContainer><CloseButton color="--font-color-plain-bg"><i className="fa-solid fa-xmark"></i></CloseButton></NoScrollContainer>
            <>{location.includes("profile") ? <Profile /> : <Home />}</>
            <OverlayContainer>
                <Text>Hi, I'm desktop view</Text>
            </OverlayContainer>

        </MainContainer>




    )
}