import React, { useState } from "react";

import { VUpload } from "../../views/VUpload/VUpload";
import { ViewContainer } from "../Styles.styled";
export const Upload = () => {

    const upload = (data) => {
        console.log('moment to upload: ',data);
        //momentService.createMoment(data);
    }

    return (
        <ViewContainer>
            <VUpload action={upload} location={'home'} />
        </ViewContainer>
    )
}