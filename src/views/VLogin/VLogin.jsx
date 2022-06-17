import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogForm } from "../../components/Forms/LogForm";
import { TextBold, Text, Title, Row, ViewContainer } from '../../pages/Pages.styled';


export const VLogin = (props) => {

    return (
        <ViewContainer>
            <Title>Log in</Title>
            <LogForm location={props.location} functions={props.functions} />
            <Row gap="1%"><Text>Don't have an account? </Text><TextBold><Link to="/sign-in">Sign in</Link></TextBold></Row>
        </ViewContainer>
    )
}