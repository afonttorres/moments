import React from "react";
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Navs/Nav';
import { VSearcher } from "../../views/VSearcher/VSearcher";
import { ViewContainer } from '../Styles.styled';
import { useState } from "react";
import { InfoModal } from "../../components/Modals/InfoModal";
import { useEffect } from "react";
import { momentAPIService } from "../../services/momentAPIService";

export const Searcher = () => {

    const [suggestions, setSuggestions] = useState();
    const [moments, setMoments] = useState();
    const [search, setSearch] = useState();
    const [msg, setMsg] = useState();

    useEffect(() => {
        getRandomMoments();
    }, [])

    const getRandomMoments = () => {
        momentAPIService.getAllMoments().then(res => { if (res) setMoments([...res, ...res, ...res]) });
    }

    const searchMoment = (data) => {
        let search = data.trim().toLowerCase();
        if (search === '' || search === undefined) return;
        momentAPIService.searchMoment(search).then(res => {
            if (res) {
                setSuggestions(res);
                setSearch(search);
            }
        })
    }

    const cancelSearch = () => {
        setSuggestions();
        setSearch();
    }

    const openModal = (msg) => {
        setMsg(msg);
    }

    const closeModal = () => {
        setMsg();
    }

    if(moments)
    return (
        <>
            <ViewContainer>
                <Nav />
                <VSearcher moments={moments} searchMoment={searchMoment} cancelSearch={cancelSearch} suggestions={suggestions} search={search} openModal={openModal} />
                <Footer />
            </ViewContainer>
            <>{msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}</>
        </>

    )
}