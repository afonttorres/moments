import React, { useState } from "react";
import { generalServices } from "../../services/generalServices";
import { Home } from "../../pages/Home/Home";
import { Profile } from '../../pages/Profile/Profile';
import { Link } from 'react-router-dom';
import { OverlayContainer, NoScrollContainer, MainContainer, CloseButton } from "../../pages/Styles.styled";
import { DetailCardDT } from "../../components/Cards/DetailCardDT";

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
                <noscript>si faig botons pel profile o input per afegir comentari</noscript>
            </OverlayContainer>
        </MainContainer >
    )
}