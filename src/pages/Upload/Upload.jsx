import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { MomentForm } from "../../components/Forms/MomentForm";
import { Nav } from "../../components/Nav/Nav";
import { MainContainer, Title } from "../Pages.styled";
export const Upload = () => {

    const upload = (data) => {
        console.log(data);
    }
    
    return (
        <MainContainer>
            <Title>Upload</Title>
            <MomentForm action={upload} />
        </MainContainer>

    )
}