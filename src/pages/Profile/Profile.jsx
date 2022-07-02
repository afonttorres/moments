import React, { useEffect, useState } from 'react';
import mockUsers from '../../mockUser.json';
import { Footer } from '../../components/Footer/Footer';
import { ViewContainer } from '../Styles.styled';
import { VProfile } from '../../views/VProfile/VProfile';
import { momentService } from '../../services/momentService';


export const Profile = (props) => {


    const [moments, setMoments] = useState();
    const [user, setUser] = useState(mockUsers[0]);

    useEffect(() => {
        getData();
        getUser();
    }, [])

    useEffect(() => {
        momentService.getProfileMoments(1).then(res => { if (res) console.log(res) })
    })

    const getData = () => {
        momentService.getAllMoments().then(res => { if (res) setMoments(res) });
    }

    const getUser = () => {
        const log = JSON.parse(localStorage.getItem('log'));
        if (!log) return;
        setUser(mockUsers.filter(user => user.username === log.username)[0]);
    }

    return (
        <ViewContainer>
            <VProfile user={user} moments={moments} />
            <Footer />
        </ViewContainer>
    );
}