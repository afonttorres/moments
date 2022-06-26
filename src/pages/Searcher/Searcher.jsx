import React from "react";
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import { VSearcher } from "../../views/VSearcher/VSearcher";
import { ViewContainer } from '../Styles.styled';
import moments from '../../mockMoments.json'
import { useState } from "react";
import { momentService } from "../../services/momentService";

export const Searcher = () => {

    const [suggestions, setSuggestions] = useState();
    const [search, setSearch] = useState();

    const searchMoment = (data) =>{
        if (data == '') return;
        momentService.searchMoment(data.toLowerCase()).then(res =>{
            if(res){
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

    return (
        <ViewContainer>
            <Nav isLogged={true} />
            <VSearcher searchMoment={searchMoment} cancelSearch={cancelSearch} suggestions={suggestions} search={search}/>
            <Footer />
        </ViewContainer>
    )
}