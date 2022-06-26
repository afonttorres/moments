import React from "react";
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import { VSearcher } from "../../views/VSearcher/VSearcher";
import { ViewContainer } from '../Styles.styled';

export const Searcher = () => {

    const search = (search) =>{
        if (search == '') return;
        console.log(search);
        //momentService.getMoments(search);
        //userService.getUsers(search);
    }

    const cancel = () => {
        console.log('search canceled');
    }

    return (
        <ViewContainer>
            <Nav isLogged={true} />
            <VSearcher search={search} cancel={cancel}/>
            <Footer />
        </ViewContainer>
    )
}