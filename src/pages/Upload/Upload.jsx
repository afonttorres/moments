import React, { useState } from "react";

import { VUpload } from "../../views/VUpload/VUpload";
import { MainContainer } from "../Styles.styled";
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