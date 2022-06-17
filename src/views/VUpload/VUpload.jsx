import React from "react";
import { ViewContainer, CloseButton, Title } from "../../pages/Pages.styled";
import { Link } from 'react-router-dom';
import { MomentForm } from '../../components/Forms/MomentForm';


export const VUpload = (props) => {

    return (
        <ViewContainer>
            <CloseButton><Link to="/home"><i className="fa-solid fa-angle-left"></i></Link></CloseButton>
            <Title>Upload</Title>
            <MomentForm action={props.action} />
        </ViewContainer>
    )
}