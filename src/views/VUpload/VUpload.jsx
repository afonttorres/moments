import React from "react";
import { View, TitleCapi, MainContainer } from "../../pages/Styles.styled";
import { Link } from 'react-router-dom';
import { MomentForm } from '../../components/Forms/MomentForm';
import { BackButton } from "../../components/Buttons/BackButton";
import { useEffect } from "react";


export const VUpload = (props) => {

    useEffect(() => { }, [props])
    console.log(props.title)
    return (
        <MainContainer>
            <BackButton location={props.location} action={props.closeUpdate} />
            <View>
                <TitleCapi>{props.title}</TitleCapi>
                <MomentForm action={props.action} moment={props.moment} title={props.title}/>
            </View>
        </MainContainer>
    )
}