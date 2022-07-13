import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataService } from "../../services/dataServices";
import { userAPIService } from "../../services/userAPIService";
import { VSettings } from "../../views/VSettings/VSettings";
import { Footer } from '../../components/Footer/Footer';
import { ViewContainer } from "../Styles.styled";

export const Settings = () => {

    const [loggedId, setLoggedId] = useState();
    const [user, setUser] = useState();
    const [checkUser, setCheckUser] = useState();
    const navigate = useNavigate();
    const s = 3;
    const ms = s * 1000;

    useEffect(() => {
        findLogged();
    }, [])

    useEffect(() => {
        if (!loggedId) return;
        getUser();
    }, [loggedId])


    const findLogged = () => {
        const logged = dataService.getLoggedUser();
        if (!logged) return;
        setLoggedId(logged);
    }

    const getUser = () => {
        userAPIService.getUser(loggedId).then(res => {
            if (res) {
                setUser(res);
                setCheckUser(res);
            }
        })
    }

    const showPreview = (data) => {
        setUser({...user, ...data});
    }

    const update = () =>{
        userAPIService.updateUser(user).then(res => {
            if(res){
                setTimeout(() => { navigate('/profile') }, ms)
            }
        })
    }


    return (
        <ViewContainer>
            {user ? <VSettings user={user} checkUser={checkUser} showPreview={showPreview} update={update}/> : null}
            <Footer />
        </ViewContainer>
    )
}