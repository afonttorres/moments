import React, { useEffect, useState } from 'react';
import { VLogin } from '../../views/VLogin/VLogin';
import { VSignin } from '../../views/VSignin/VSignin';
import { ViewContainer } from '../Styles.styled';
import { InfoModal } from '../../components/Modals/InfoModal';
import { useNavigate } from 'react-router-dom';
import { generalServices } from '../../services/generalServices';


export const Login = (props) => {
    const [location, setLocation] = useState(window.location.pathname.toString().substring(1, (window.location.pathname.toString().length)));
    const [msg, setMsg] = useState();

    const navigate = useNavigate();
    const s = 3;
    const ms = s*1000;

    useEffect(() => {
        setLocation(window.location.pathname.toString().substring(1, (window.location.pathname.toString().length)))
    }, [window.location.pathname])

    const login = (data) => {
        openModal(`${data.email} logged succesfully!`);
        setTimeout(()=>{ navigate('/home');}, ms);
       
    }
    const signin = (data) => {
        openModal(`${generalServices.capitalizeName(data.name)} registred succesfully!`);
        localStorage.setItem('log', JSON.stringify(data));
        setTimeout(()=>{ navigate('/home');}, ms);
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
                {location === "log-in" ? <VLogin location={location} functions={foosObj} openModal={openModal}/> : <VSignin location={location} functions={foosObj} openModal={openModal}/>}
            </ViewContainer>
            <>{msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}</>
        </>
    );
}