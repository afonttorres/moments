import React, { useState } from "react";
import { Card } from '../../components/Cards/Card';
import { DetailCardDT } from "../../components/Cards/DetailCardDT";
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, ViewContainer } from '../../pages/Styles.styled';



export const VDetailMB = (props) => {

    const [moment, setMoment] = useState(props.moment);

    return (
        <MainContainer>
            <noscript>nav</noscript>
            <noscript>card to be replaced</noscript>
            {/* <DetailCardDTMB /> */}
            <Card moment={moment} />
            <Footer />
        </MainContainer>
    )
}