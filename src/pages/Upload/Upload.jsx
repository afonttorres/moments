import React, { useState } from "react";

import { VUpload } from "../../views/VUpload/VUpload";
import { ViewContainer } from "../Styles.styled";
export const Upload = () => {

    const upload = (data) => {
        console.log(data);
    }

    return (
        <ViewContainer>
            <VUpload action={upload} />
        </ViewContainer>
    )
}