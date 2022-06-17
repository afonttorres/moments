import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { Footer } from "../../components/Footer/Footer";
import { MomentForm } from "../../components/Forms/MomentForm";
import { Nav } from "../../components/Nav/Nav";
import { CloseButton, MainContainer, Title } from "../Pages.styled";
export const Upload = () => {

    const upload = (data) => {
        console.log(data);
    }

    return (
        <MainContainer>
            <CloseButton><Link to="/home"><i className="fa-solid fa-angle-left"></i></Link></CloseButton>
            <Title>Upload</Title>
            <MomentForm action={upload} />
        </MainContainer>

    )
}