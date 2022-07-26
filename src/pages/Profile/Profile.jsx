import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { ViewContainer } from '../Styles.styled';
import { VProfile } from '../../views/VProfile/VProfile';
import { useLocation, useParams } from 'react-router-dom';
import { momentAPIService } from '../../services/momentAPIService';
import { userAPIService } from '../../services/userAPIService';
import { authUtil } from '../../utils/auth';
import { Loader } from '../../components/Loader/Loader';


export const Profile = (props) => {


    const [moments, setMoments] = useState();
    const [user, setUser] = useState();
    const [loggedId, setLoggedId] = useState();
    const [location, setLocation] = useState(useLocation().pathname);

    const [profileId, setProfileId] = useState(useParams().profileId);
    const s = 3;
    const ms = s * 1000;

    useEffect(() => {
        findLogged()
    }, [])

    useEffect(() => {
        if (!loggedId) return;
        setUser();
        setTimeout(() => { getUser() }, ms)
    }, [profileId, loggedId, location]);

    useEffect(() => {
        let path = window.location.pathname;
        if (location === path) return;
        if (path.includes('/profile/')) return;
        setLocation(path);
        setProfileId();
    }, [window.location.pathname])

    //GETTERS
    const getData = (userId) => {
        momentAPIService.getUserMoments(userId).then(res => {
            if (!res) return;
            if (res.error) return;
            setMoments(res);
        })
    }

    const getUser = () => {
        let id;
        profileId ? id = profileId : id = loggedId;
        userAPIService.getUser(id).then(res => {
            if (!res) return;
            if (res.error) return;
            res.id === parseInt(loggedId) ? setUser({ ...res, logged: true }) : setUser(res);
            getData(id);
        })
    }

    //LOGGED
    const findLogged = () => {
        const logged = authUtil.getLoggedUser();
        if (!logged) return;
        setLoggedId(logged);
    }

    return (
        <>
            {user ?
                <ViewContainer>
                    <VProfile user={user} moments={moments} />
                    <Footer />
                </ViewContainer>
                :
                <Loader />
            }
        </>
    );
}