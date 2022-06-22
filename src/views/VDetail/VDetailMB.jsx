import React, { useState } from "react";
import { DetailCardMB } from '../../components/Cards/DetailCardMB';
import {Nav} from '../../components/Nav/Nav';
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, ViewContainer } from '../../pages/Styles.styled';



export const VDetailMB = (props) => {

    const [moment, setMoment] = useState(props.moment);
    const [location, setLocation] = useState(window.location.pathname);

    return (
        <MainContainer>
            <Nav />
            <DetailCardMB moment={moment} location={location} update={props.update} erase={props.erase}/>
            <Footer />
        </MainContainer>
    )
}