import React, { useEffect, useState } from 'react';
import mockUser from '../../mockUser.json';
import { Footer } from '../../components/Footer/Footer';
import { ViewContainer } from '../Styles.styled';
import { VProfile } from '../../views/VProfile/VProfile';
import { momentService } from '../../services/momentService';


export const Profile = (props) => {


    const [moments, setMoments] = useState();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        momentService.getAllMoments().then(res => { if (res) setMoments(res) });
    }

    return (
        <ViewContainer>
            <VProfile user={mockUser[0]} moments={moments}/>
            <Footer />
        </ViewContainer>
    );
}