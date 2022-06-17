import React, { useEffect, useState } from 'react';
import { Feed } from '../../components/Feed/Feed';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import { MainContainer } from '../Pages.styled';


export const Home = (props) => {
    console.log('home');
    return (
        <MainContainer>
            <Nav />
            <Feed />
            <Footer />
        </MainContainer>
    );
}