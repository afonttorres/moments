import React, { useState } from "react";
import { DetailCardMB } from '../../components/Cards/DetailCardMB';
import {Nav} from '../../components/Navs/Nav';
import { Footer } from "../../components/Footer/Footer";
import { MainContainer } from '../../pages/Styles.styled';
import { DetailNav } from "../../components/Navs/DetailNav";



export const VDetailMB = (props) => {

    return (
        <MainContainer>
            <DetailNav moment={props.moment} location={props.location}/>
            <DetailCardMB moment={props.moment} comments={props.comments} update={props.update} erase={props.erase} like={props.like} save={props.save} createComment={props.createComment}/>
            <Footer />
        </MainContainer>
    )
}