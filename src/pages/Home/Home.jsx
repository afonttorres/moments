import React, { useEffect, useState } from 'react';
import { Feed } from '../../components/Feed/Feed';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import { MainContainer, ViewContainer } from '../Styles.styled';


export const Home = (props) => {
    return (
        <ViewContainer>
            <Nav isLogged={true} />
            <Feed location="home" />
            <Footer />
        </ViewContainer>
    );
}