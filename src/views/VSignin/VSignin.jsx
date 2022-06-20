import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { LogForm } from "../../components/Forms/LogForm";
import { TextBold, Text, Title, Row, MainContainer, TextLine } from '../../pages/Styles.styled';

export const VSignin = (props) => {

    return (
        <MainContainer>
            <Title>Sign in</Title>
            <LogForm location={props.location} functions={props.functions} />
            <TextLine><Text>Already have an account?</Text>&nbsp;<TextBold><Link to="/log-in">Log in</Link></TextBold></TextLine> 
        </MainContainer>
    )
}