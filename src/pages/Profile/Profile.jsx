import React, { useEffect, useState } from 'react';
import mockUsers from '../../mockUser.json';
import { Footer } from '../../components/Footer/Footer';
import { ViewContainer } from '../Styles.styled';
import { VProfile } from '../../views/VProfile/VProfile';
import { momentService } from '../../services/momentService';
import { userService } from '../../services/userService';
import { useLocation, useParams } from 'react-router-dom';
import { momentAPIService } from '../../services/momentAPIService';
import { userAPIService } from '../../services/userAPIService';
import { dataService } from '../../services/dataServices';


export const Profile = (props) => {


    const [moments, setMoments] = useState();
    const [user, setUser] = useState();
    const [loggedId, setLoggedId] = useState();
    const [location, setLocation] = useState(useLocation().pathname);

    const [profileId, setProfileId] = useState(useParams().profileId);

    useEffect(() => { findLogged() }, [])

    useEffect(() => {
        if (!loggedId) return;
        getUser();
    }, [profileId, loggedId, location]);

    useEffect(()=>{
        let path = window.location.pathname;
        if(location === path) return;
        if(path.includes('/profile/')) return;
        setLocation(path);
        setProfileId();
    },[window.location.pathname])

    //GETTERS
    const getData = (userId) => {
        momentAPIService.getUserMoments(userId).then(res => { if (res) setMoments(res) })
    }

    const getUser = () => {
        let id;
        profileId ? id = profileId : id = loggedId;
        console.log(id)
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

    return (
        <>
            {user ?
                <ViewContainer>
                    <VProfile user={user} moments={moments} />
                    <Footer />
                </ViewContainer>
                :
                null
            }
        </>
    );
}