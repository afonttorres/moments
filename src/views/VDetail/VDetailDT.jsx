import React, { useState } from "react";
import { generalServices } from "../../services/generalServices";
import { Home } from "../../pages/Home/Home";
import { Profile } from '../../pages/Profile/Profile';
import { Link } from 'react-router-dom';

import { Text, OverlayContainer, NoScrollContainer, MainContainer, CloseButton } from "../../pages/Pages.styled";
import { DetailCardDT } from "../../components/Card/DetailCardDT";

export const VDetailDT = (props) => {
    const path = window.location.pathname;
    const [location, setLocation] = useState(generalServices.cutString(path, "/", "/detail"));
    const [moment, setMoment] = useState(props.moment);

    console.log(location)
    return (
        <MainContainer>
            <NoScrollContainer>
                <CloseButton color="--font-color-plain-bg">
                    <Link to={`/${location}`}>
                        <i className="fa-solid fa-xmark"></i>
                    </Link>
                </CloseButton>
            </NoScrollContainer>
            <>{location.includes("profile") ? <Profile /> : <Home />}</>
            <OverlayContainer>
                <DetailCardDT moment={moment} />
                <noscript>si faig botons pel profile també</noscript>
            </OverlayContainer>
        </MainContainer >
    )
}