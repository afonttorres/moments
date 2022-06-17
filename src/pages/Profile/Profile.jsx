import React, { useEffect, useState } from 'react';
import { Nav } from '../../components/Nav/Nav';
import { Footer } from '../../components/Footer/Footer';
import { MainContainer } from '../Pages.styled';


export const Profile = (props) => {

    return (
        <MainContainer>
            <Nav isLogged={true} />
            <Footer />
        </MainContainer>
    );
}