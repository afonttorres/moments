import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { VLogin } from '../../views/VLogin/VLogin';
import { VSignin } from '../../views/VSignin/VSignin';
import { Container } from './Login.styled';


export const Login = (props) => {
    const [location] = useState(useLocation(0).pathname.toString().substring(1, (useLocation(0).pathname.toString().length)));

    const login = (data) => {
        for (let key in data) console.log(`login:${data[key]}`)
    }
    const signin = (data) => {
        for (let key in data) console.log(`signin:${data[key]}`)
    }

    const foosObj = { "login": login, "signin": signin };
    return (
        <Container>{location === "log-in" ? <VLogin location={location} functions={foosObj} /> : <VSignin location={location} functions={foosObj} />}
        </Container>

    );
}