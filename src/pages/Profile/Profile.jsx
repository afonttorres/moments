import React, { useEffect, useState } from 'react';
import mockUser from '../../mockUser.json';
import { Nav } from '../../components/Navs/Nav';
import { Footer } from '../../components/Footer/Footer';
import { ViewContainer } from '../Styles.styled';
import { VProfile } from '../../views/VProfile/VProfile';


export const Profile = (props) => {

    return (
        <ViewContainer>
            <VProfile user={mockUser[0]}/>
            <Footer />
        </ViewContainer>
    );
}