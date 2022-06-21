import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogForm } from "../../components/Forms/LogForm";
import { TextBold, Text, Title, Row, View, MainContainer, TextLine } from '../../pages/Styles.styled';


export const VLogin = (props) => {

    return (
        <MainContainer>
            <View>
                <Title>Log in</Title>
                <LogForm location={props.location} functions={props.functions} />
                <TextLine><Text>Don't have an account?</Text>&nbsp;<TextBold><Link to="/sign-in">Sign in</Link></TextBold></TextLine>
            </View>
        </MainContainer>
    )
}