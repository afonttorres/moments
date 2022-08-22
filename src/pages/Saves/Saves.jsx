import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Nav } from "../../components/Navs/Nav";
import { VLikesAndSaves } from "../../views/VLikesAndSaves/VLikesAndSaves";
import { momentAPIService } from "../../services/momentAPIService";
import { MainTitle, ViewContainer } from "../Styles.styled";
import { InfoModal } from "../../components/Modals/InfoModal";
import { Loader } from "../../components/Loader/Loader";

export const Saves = () => {

    const [moments, setMoments] = useState();
    const [msg, setMsg] = useState();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        momentAPIService.getUserSaves().then(res => {
            if (res.error) {
                openModal("Log yourself in to see your saved moments!");
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
                {moments ? <>{moments.length > 0 ? <VLikesAndSaves moments={moments} adj={'favorite'} /> : <MainTitle style={{ textAlign: "center" }}>You don't have any saved moment</MainTitle>}</> : <Loader />}
                <Footer />
            </ViewContainer>
            {msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}
        </>

    )
}