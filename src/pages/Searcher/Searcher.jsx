import React from "react";
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import { VSearcher } from "../../views/VSearcher/VSearcher";
import { ViewContainer } from '../Styles.styled';

export const Searcher = () => {
    return (
        <ViewContainer>
            <Nav isLogged={true} />
            <VSearcher />
            <Footer />
        </ViewContainer>
    )
}