import React, { useEffect, useState } from 'react';
import { VLogin } from '../../views/VLogin/VLogin';
import { VSignin } from '../../views/VSignin/VSignin';
import { MainContainer } from '../Pages.styled';


export const Login = (props) => {
    const [location, setLocation] = useState(window.location.pathname.toString().substring(1, (window.location.pathname.toString().length)));
    useEffect(() => {
        setLocation(window.location.pathname.toString().substring(1, (window.location.pathname.toString().length)))
    }, [window.location.pathname])

    const login = (data) => {
        for (let key in data) console.log(`login:${data[key]}`)
    }
    const signin = (data) => {
        for (let key in data) console.log(`signin:${data[key]}`)
    }

    const foosObj = { "login": login, "signin": signin };
    console.log(location)
    return (
        <MainContainer>
            {location === "log-in" ? <VLogin location={location} functions={foosObj} /> : <VSignin location={location} functions={foosObj} />}
        </MainContainer>
    );
}