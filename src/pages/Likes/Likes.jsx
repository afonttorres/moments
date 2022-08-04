import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import { Nav } from "../../components/Navs/Nav";
import { Footer } from "../../components/Footer/Footer";
import { VLikesAndSaves } from '../../views/VLikesAndSaves/VLikesAndSaves';
import { momentAPIService } from "../../services/momentAPIService";
import { MainTitle, ViewContainer } from "../Styles.styled"
import { InfoModal } from "../../components/Modals/InfoModal";
export const Likes = () => {

    const [moments, setMoments] = useState();
    const [msg, setMsg] = useState();
    const s = 3;
    const ms = s * 1000;

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        momentAPIService.getUserLikes().then(res => {
            if (res.error) {
                setTimeout(() => {
                    openModal("Log yourself in to see your favorite moments!");
                }, ms * .5);
                return;
            }
            setMoments(res);
        })
    }

    //MODALS

    const openModal = (msg) => {
        setMsg(msg)
    }

    const closeModal = () => {
        setMsg();
    }

    return (
        <>
            <ViewContainer>
                <Nav />
                <>{moments ? <VLikesAndSaves moments={moments} adj={'favorite'} /> : <MainTitle style={{ textAlign: "center" }}>You don't have any favorite moments</MainTitle>}</>
                <Footer />
            </ViewContainer>
            {msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}
        </>
    )
}