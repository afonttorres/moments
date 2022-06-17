import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Footer } from "../../components/Footer/Footer";
import { MomentForm } from "../../components/Forms/MomentForm";
import { Nav } from "../../components/Nav/Nav";
import { VUpload } from "../../views/VUpload/VUpload";
import { CloseButton, MainContainer, Title } from "../Pages.styled";
export const Upload = () => {

    const upload = (data) => {
        console.log(data);
    }

    return (
        <MainContainer>
            <VUpload action={upload} />
        </MainContainer>
    )
}