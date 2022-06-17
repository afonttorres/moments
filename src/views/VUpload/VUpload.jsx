import React from "react";
import { ViewContainer, BackButton, Title } from "../../pages/Pages.styled";
import { Link } from 'react-router-dom';
import { MomentForm } from '../../components/Forms/MomentForm';


export const VUpload = (props) => {

    return (
        <ViewContainer>
            <BackButton><Link to="/home"><i className="fa-solid fa-angle-left"></i></Link></BackButton>
            <Title>Upload</Title>
            <MomentForm action={props.action} />
        </ViewContainer>
    )
}