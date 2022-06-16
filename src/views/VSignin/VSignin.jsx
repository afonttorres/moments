import React, { useState, useEffect } from "react";
import { LogForm } from "../../components/Forms/LogForm";
import { Text, Title, Container } from "./VSignin.styled";

export const VSignin = (props) => {

    return (
        <Container>
            <Title>Sign in</Title>
            <LogForm location={props.location} functions={props.functions} />
            <Text>Already have an account? Log in</Text>
        </Container>
    )
}