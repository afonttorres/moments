import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { LogForm } from "../../components/Forms/LogForm";
import { TextBold, Text, Title, Row, ViewContainer } from '../../pages/Styles.styled';

export const VSignin = (props) => {

    return (
        <ViewContainer>
            <Title>Sign in</Title>
            <LogForm location={props.location} functions={props.functions} />
            <Row gap="1%"><Text>Already have an account?</Text><TextBold><Link to="/log-in">Log in</Link></TextBold></Row> 
        </ViewContainer>
    )
}