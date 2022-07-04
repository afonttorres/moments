import React, { useEffect, useState } from 'react';
import mockUsers from '../../mockUser.json';
import { Footer } from '../../components/Footer/Footer';
import { ViewContainer } from '../Styles.styled';
import { VProfile } from '../../views/VProfile/VProfile';
import { momentService } from '../../services/momentService';
import { userService } from '../../services/userService';
import { useNavigate, useParams } from 'react-router-dom';
import { momentAPIService } from '../../services/momentAPIService';


export const Profile = (props) => {


    const [moments, setMoments] = useState();
    const [user, setUser] = useState();
    const [profileId, setProfileId] = useState(useParams().profileId);

    useEffect(() => {
        getUser();
    }, [profileId]);

    const getData = (userId) => {
        momentAPIService.getProfileMoments(userId).then(res => { if (res) setMoments(res) });
    }

    const getUser = () => {
        const log = JSON.parse(localStorage.getItem('log'));
        if (!log) return;
        let id;
        profileId ? id = profileId : id = log.log_id;
        userService.getUser(id).then(res => {
            if (res) {
                let userFound = res;
                getData(parseInt(userFound.id));
                if (userFound.id === log.log_id) userFound = { ...userFound, logged: true }
                setUser(userFound);
            }
        })
    }

    if (user)
        return (
            <ViewContainer>
                <VProfile user={user} moments={moments} />
                <Footer />
            </ViewContainer>
        );
}