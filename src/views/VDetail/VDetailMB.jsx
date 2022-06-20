import React, { useState } from "react";
import { DetailCardMB } from '../../components/Cards/DetailCardMB';
import {Nav} from '../../components/Nav/Nav';
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, ViewContainer } from '../../pages/Styles.styled';



export const VDetailMB = (props) => {

    const [moment, setMoment] = useState(props.moment);

    return (
        <MainContainer>
            <Nav />
            <DetailCardMB moment={moment} />
            <Footer />
        </MainContainer>
    )
}