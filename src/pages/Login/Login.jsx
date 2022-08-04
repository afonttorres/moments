import React, { useEffect, useState } from 'react';
import { VLogin } from '../../views/VLogin/VLogin';
import { VSignin } from '../../views/VSignin/VSignin';
import { ViewContainer } from '../Styles.styled';
import { InfoModal } from '../../components/Modals/InfoModal';
import { useNavigate } from 'react-router-dom';
import { authUtil } from '../../utils/auth';
import { authAPIService } from '../../services/authAPIService';


export const Login = (props) => {
    const [location, setLocation] = useState(window.location.pathname.toString().substring(1, (window.location.pathname.toString().length)));
    const [username, setUsername] = useState();
    const [msg, setMsg] = useState();

    const navigate = useNavigate();
    const s = 3;
    const ms = s * 1000;

    useEffect(() => {
        setLocation(window.location.pathname.toString().substring(1, (window.location.pathname.toString().length)))
    }, [window.location.pathname])

    useEffect(() => {
        if (!location) return;
        setTimeout(() => { checkIfUserLogged(location) }, ms)
    }, [location])

    useEffect(()=>{
        if(!username) return;
        console.log(username);
    },[username])

    //SIGNIN (CREATE)
    const signin = (data) => {
        authAPIService.register(data).then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                // openModal(`User: ${data.email} already exists, please log yourself in.`);
                return;
            }
            setTimeout(() => { openModal(res); }, ms * .5)
            setTimeout(() => { navigate('/log-in'); }, ms);
        })
    }

    const login = (data) => {
        authAPIService.login(data).then(res => {
            if (!res) return;
            if (res.error) {
                if (res.error.includes("Unauth")) {
                    openModal(`Wrong password!`);
                    setUsername(data.username);
                    return;
                }
                openModal(res.error);
                return;
            }
            setTimeout(() => { openModal(`${res.username} logged succesfully!`); }, ms * .5)
            localStorage.setItem('log', JSON.stringify(res.token));
            setTimeout(() => { navigate('/home'); }, ms);
        })
    }

    //CHECK IF SOMEONE IS LOGGED
    const checkIfUserLogged = (action) => {
        const logged = authUtil.getLoggedUser();
        if (!logged) return;
        openModal(`Please, log out before ${action.split("-").join(" ")}`);
        return;
    }

    //PROPS FOR CHILDREN
    const foosObj = { "login": login, "signin": signin };


    //MODAL
    const openModal = (msg) => {
        setMsg(msg);
    }

    const closeModal = () => {
        setMsg();
    }

    return (
        <>
            <ViewContainer>
                {location === "log-in" || location === '' ? <VLogin location={location} functions={foosObj} openModal={openModal} username={username} /> : <VSignin location={location} functions={foosObj} openModal={openModal} />}
            </ViewContainer>
            <>{msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}</>
        </>
    );
}