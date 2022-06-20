import React, { useState } from "react";
import { generalServices } from "../../services/generalServices";
import { Home } from "../../pages/Home/Home";
import { Profile } from '../../pages/Profile/Profile';
import { OverlayContainer, NoScrollContainer, MainContainer } from "../../pages/Styles.styled";
import { DetailCardDT } from "../../components/Cards/DetailCardDT";
import { CloseButton } from "../../components/Buttons/CloseButton";

export const VDetailDT = (props) => {
    const path = window.location.pathname;
    const [location, setLocation] = useState(path);
    const [nextLocation, setNextLocation] = useState(generalServices.cutString(path, "/", "/detail"));
    const [moment, setMoment] = useState(props.moment);

    return (
        <MainContainer>
            <NoScrollContainer>
                <CloseButton location={nextLocation} color={"--font-color-plain-bg"}/>
            </NoScrollContainer>
            <>{location.includes("profile") ? <Profile /> : <Home />}</>
            <OverlayContainer>
                <DetailCardDT location={location} moment={moment} />
                <noscript>si faig botons pel profile o input per afegir comentari</noscript>
            </OverlayContainer>
        </MainContainer >
    )
}