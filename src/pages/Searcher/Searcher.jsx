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
        momentAPIService.getAllMoments().then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                return;
            }
            setMoments([...res, ...res, ...res])
        });
    }

    const searchMoment = (data) => {
        let search = data.trim().toLowerCase();
        momentAPIService.searchMoment(search).then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                return;
            }
            setSuggestions(res);
            setSearch(search);
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

    return (
        <>
            <ViewContainer>
                <Nav />
                {moments ? <VSearcher moments={moments} searchMoment={searchMoment} cancelSearch={cancelSearch} suggestions={suggestions} search={search} openModal={openModal} /> : null}
                <Footer />
            </ViewContainer>
            <>{msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}</>
        </>

    )
}