import React, { useEffect, useState } from 'react';
import { VLogin } from '../../views/VLogin/VLogin';
import { VSignin } from '../../views/VSignin/VSignin';
import { ViewContainer } from '../Styles.styled';
import { InfoModal } from '../../components/Modals/InfoModal';
import { useNavigate } from 'react-router-dom';
import { generalServices } from '../../services/generalServices';
import users from '../../mockUser.json';


export const Login = (props) => {
    const [location, setLocation] = useState(window.location.pathname.toString().substring(1, (window.location.pathname.toString().length)));
    const [msg, setMsg] = useState();

    const navigate = useNavigate();
    const s = 3;
    const ms = s * 1000;

    useEffect(() => {
        setLocation(window.location.pathname.toString().substring(1, (window.location.pathname.toString().length)))
    }, [window.location.pathname])

    const login = (data) => {
        let loggedUser = users.filter((user, key) => user.email === data.email)[0];
        if (!loggedUser) { openModal(`User does not exist`); return; }
        if (loggedUser.password !== data.password) { openModal(`Password not correct`); return; }
        openModal(`${generalServices.capitalizeName(loggedUser.name)} logged succesfully!`);
        localStorage.setItem('log', JSON.stringify({ "username": loggedUser.username }));
        setTimeout(() => { navigate('/home'); }, ms);

    }
    const signin = (data) => {
        let loggedUser = users.filter((user, key) => user.email === data.email)[0];
        if (loggedUser) { openModal(`This user already exists`); return; }
        openModal(`${generalServices.capitalizeName(data.name)} registred succesfully!`);
        localStorage.setItem('log', JSON.stringify({ "username": data.username }));
        setTimeout(() => { navigate('/home'); }, ms);
    }

    const foosObj = { "login": login, "signin": signin };

    const openModal = (msg) => {
        setMsg(msg);
    }

    const closeModal = () => {
        setMsg();
    }

    return (
        <>
            <ViewContainer>
                {location === "log-in" ? <VLogin location={location} functions={foosObj} openModal={openModal} /> : <VSignin location={location} functions={foosObj} openModal={openModal} />}
            </ViewContainer>
            <>{msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}</>
        </>
    );
}