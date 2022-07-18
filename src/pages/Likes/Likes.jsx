import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import { Nav } from "../../components/Navs/Nav";
import { Footer } from "../../components/Footer/Footer";
import { VLikesAndSaves } from '../../views/VLikesAndSaves/VLikesAndSaves';
import { momentAPIService } from "../../services/momentAPIService";
import { MainTitle, ViewContainer } from "../Styles.styled"
export const Likes = () => {

    const [moments, setMoments] = useState();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        momentAPIService.getUserLikes().then(res => {
            if (res) setMoments(res);
        })
    }

    return (
        <ViewContainer>
            <Nav />
            <>{moments ? <VLikesAndSaves moments={moments} adj={'favorite'}/> : <MainTitle>You don't have any favorite moment</MainTitle>}</>
            <Footer />
        </ViewContainer>
    )
}