import React, { useEffect, useState } from 'react';
import mockUsers from '../../mockUser.json';
import { Footer } from '../../components/Footer/Footer';
import { ViewContainer } from '../Styles.styled';
import { VProfile } from '../../views/VProfile/VProfile';
import { momentService } from '../../services/momentService';
import { userService } from '../../services/userService';
import { useNavigate, useParams } from 'react-router-dom';
import { momentAPIService } from '../../services/momentAPIService';
import { userAPIService } from '../../services/userAPIService';
import { dataService } from '../../services/dataServices';


export const Profile = (props) => {


    const [moments, setMoments] = useState();
    const [user, setUser] = useState();
    const [loggedId, setLoggedId] = useState();

    const [profileId, setProfileId] = useState(useParams().profileId);

    useEffect(() => { findLogged() }, [])

    useEffect(() => {
        if(!loggedId) return;
        getUser();
    }, [profileId, loggedId]);

    //GETTERS
    const getData = (userId) => {
        momentAPIService.getUserMoments(userId).then(res => { if (res) setMoments(res) })
    }

    const getUser = () => {
        let id;
        profileId ? id = profileId : id = loggedId;
        userAPIService.getUser(id).then(res => {
            if (res) {
                res.id === parseInt(loggedId) ? setUser({ ...res, logged: true }) : setUser(res);
                getData(id);
            }
        })
    }

    //LOGGED
    const findLogged = () => {
        const logged = dataService.getLoggedUser();
        if (!logged) return;
        setLoggedId(logged);
    }

    if (user)
        return (
            <ViewContainer>
                <VProfile user={user} moments={moments} />
                <Footer />
            </ViewContainer>
        );
}