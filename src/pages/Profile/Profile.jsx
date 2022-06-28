import React, { useEffect, useState } from 'react';
import { Nav } from '../../components/Navs/Nav';
import { Footer } from '../../components/Footer/Footer';
import { ViewContainer } from '../Styles.styled';


export const Profile = (props) => {

    return (
        <ViewContainer>
            <Nav isLogged={true} />
            <Footer />
        </ViewContainer>
    );
}