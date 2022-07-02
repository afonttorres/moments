import React, { useEffect, useState } from 'react';
import { VLogin } from '../../views/VLogin/VLogin';
import { VSignin } from '../../views/VSignin/VSignin';
import { ViewContainer } from '../Styles.styled';
import { InfoModal } from '../../components/Modals/InfoModal';
import { useNavigate } from 'react-router-dom';
import { generalServices } from '../../services/generalServices';
import { userService } from '../../services/userService';


export const Login = (props) => {
    const [location, setLocation] = useState(window.location.pathname.toString().substring(1, (window.location.pathname.toString().length)));
    const [msg, setMsg] = useState();
    const [users, setUsers] = useState();

    const navigate = useNavigate();
    const s = 3;
    const ms = s * 1000;

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
    }, [users])

    useEffect(() => {
        setLocation(window.location.pathname.toString().substring(1, (window.location.pathname.toString().length)))
    }, [window.location.pathname])

    const getUsers = () => {
        userService.getUsers().then(res => { if (res) setUsers(res) });
    }

    const login = (data) => {
        let loggedUser = findUser(data);
        if (!loggedUser) { openModal(`User does not exist`); return; }
        if (loggedUser.password !== data.password) { openModal(`Password not correct`); return; }
        openModal(`${generalServices.capitalizeName(loggedUser.name)} logged succesfully!`);
        localStorage.setItem('log', JSON.stringify({ "log_id": loggedUser.id }));
        setTimeout(() => { navigate('/home'); }, ms);

    }
    const signin = (data) => {
        let loggedUser = findUser(data);
        console.log(loggedUser);
        if (loggedUser) { openModal(`This user already exists`); return; }
        console.log(data);
        createUser(data);
    }


    const findUser = (data) => {
        return users.filter((user, key) => user.email === data.email)[0];
    }

    const createUser = (data) =>{
        userService.createUser(data).then(res => {if(res){
            console.log(res)
            openModal(`${generalServices.capitalizeName(res.name)} registred succesfully!`);
            localStorage.setItem('log', JSON.stringify({ "log_id": res.id }));
            setTimeout(() => { navigate('/home'); }, ms);
        }})
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