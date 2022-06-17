import React, { useState } from "react";
import { Card } from '../../components/Card/Card';
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, ViewContainer } from '../../pages/Pages.styled';



export const VDetailMB = (props) => {

    const [moment, setMoment] = useState(props.moment);

    return (
        <MainContainer>
            <noscript>nav</noscript>
            <ViewContainer>
                <Card moment={moment} />
            </ViewContainer>
            <Footer />
        </MainContainer>
    )
}