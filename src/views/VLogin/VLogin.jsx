import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { LogForm } from "../../components/Forms/LogForm";
import { Text, Title, Container } from "./VLogin.styled";


export const VLogin = (props) => {

    return (
        <Container>
            <Title>Log in</Title>
            <LogForm location={props.location} functions={props.functions} />
            <Text>Don't have an account? Sign in</Text>
        </Container>
    )
}