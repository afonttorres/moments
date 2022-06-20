import React from "react";
import { MainContainer, Title } from "../../pages/Styles.styled";
import { Link } from 'react-router-dom';
import { MomentForm } from '../../components/Forms/MomentForm';
import { BackButton } from "../../components/Buttons/BackButton";


export const VUpload = (props) => {

    return (
        <MainContainer>
            <BackButton location={'home'} />
            <Title>Upload</Title>
            <MomentForm action={props.action} />
        </MainContainer>
    )
}