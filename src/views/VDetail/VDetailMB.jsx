import React, { useState } from "react";
import { DetailCardMB } from '../../components/Cards/DetailCardMB';
import {Nav} from '../../components/Nav/Nav';
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, ViewContainer } from '../../pages/Styles.styled';



export const VDetailMB = (props) => {

    return (
        <MainContainer>
            {/* nav profile -> will need nextLocation -props.location */}
            <Nav />
            <DetailCardMB moment={props.moment} update={props.update} erase={props.erase}/>
            <Footer />
        </MainContainer>
    )
}