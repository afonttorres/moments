import React, { useState } from "react";
import { generalServices } from "../../services/generalServices";
import { Home } from "../../pages/Home/Home";
import { Profile } from '../../pages/Profile/Profile';
import { OverlayContainer, NoScrollContainer, MainContainer } from "../../pages/Styles.styled";
import { DetailCardDT } from "../../components/Cards/DetailCardDT";
import { CloseButton } from "../../components/Buttons/CloseButton";

export const VDetailDT = (props) => {

    const [moment, setMoment] = useState(props.moment);

    return (
        <OverlayContainer>
            <DetailCardDT location={props.location} moment={moment} update={props.update} erase={props.erase} />
        </OverlayContainer>
    )
}