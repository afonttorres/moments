import React, { useEffect, useState } from 'react';
import { VLogin } from '../../views/VLogin/VLogin';
import { VSignin } from '../../views/VSignin/VSignin';
import { ViewContainer } from '../Styles.styled';
import { InfoModal } from '../../components/Modals/InfoModal';
import { useNavigate } from 'react-router-dom';
import { formatUtil } from '../../utils/format';
import { userAPIService } from '../../services/userAPIService';
import { authUtil } from '../../utils/auth';



export const Login = (props) => {
    const [location, setLocation] = useState(window.location.pathname.toString().substring(1, (window.location.pathname.toString().length)));

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

    //SIGNIN (CREATE)
    const signin = (data) => {
        userAPIService.createUser(data).then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                // openModal(`User: ${data.email} already exists, please log yourself in.`);
                return;
            }
            localStorage.setItem('log', JSON.stringify({ "log_id": res.id }));
            setTimeout(() => { openModal(`${formatUtil.capitalizeName(res.name)} registred succesfully!`); }, ms * .5)
            setTimeout(() => { navigate('/home'); }, ms);
        })
    }

    const login = (data) => {
        userAPIService.logUser(data).then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                // openModal(`User: ${data.email} does not exist or password might be wrong`);
                return;
            }
            setTimeout(() => { openModal(`${formatUtil.capitalizeName(res.name)} logged succesfully!`); }, ms * .5)
            localStorage.setItem('log', JSON.stringify({ "log_id": res.id }));
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
                {location === "log-in" || location === '' ? <VLogin location={location} functions={foosObj} openModal={openModal} /> : <VSignin location={location} functions={foosObj} openModal={openModal} />}
            </ViewContainer>
            <>{msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}</>
        </>
    );
}