import React from "react";
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import { VSearcher } from "../../views/VSearcher/VSearcher";
import { ViewContainer } from '../Styles.styled';
import moments from '../../mockMoments.json'
import { useState } from "react";

export const Searcher = () => {

    const [suggestions, setSuggestions] = useState();

    const search = (search) =>{
        if (search == '') return;
        //momentService.getMoments(search);
        setSuggestions(moments)
    }

    const cancel = () => {
        console.log('search canceled');
        setSuggestions();
    }

    return (
        <ViewContainer>
            <Nav isLogged={true} />
            <VSearcher search={search} cancel={cancel} suggestions={suggestions}/>
            <Footer />
        </ViewContainer>
    )
}