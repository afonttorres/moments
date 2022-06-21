import React, { useEffect, useState } from 'react';
import { Feed } from '../../components/Feeds/Feed';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import { ViewContainer, View } from '../Styles.styled';


export const Home = (props) => {
    return (
        <ViewContainer>
            <Nav isLogged={true} />
            <View>
                <Feed location="home" />
            </View>
            <Footer />
        </ViewContainer>
    );
}