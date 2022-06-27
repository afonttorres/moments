import React from "react";
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import { VSearcher } from "../../views/VSearcher/VSearcher";
import { ViewContainer } from '../Styles.styled';
import { useState } from "react";
import { momentService } from "../../services/momentService";
import { InfoModal } from "../../components/Modals/InfoModal";

export const Searcher = () => {

    const [suggestions, setSuggestions] = useState();
    const [search, setSearch] = useState();
    const [msg, setMsg] = useState();

    const searchMoment = (data) => {
        momentService.searchMoment(data.toLowerCase()).then(res => {
            if (res) {
                setSuggestions(res);
                setSearch(data);
            }
        })
    }

    const cancelSearch = () => {
        console.log('search canceled');
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
                <Nav isLogged={true} />
                <VSearcher searchMoment={searchMoment} cancelSearch={cancelSearch} suggestions={suggestions} search={search} openModal={openModal}/>
                <Footer />
            </ViewContainer>
            <>{msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}</>
        </>

    )
}