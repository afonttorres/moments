import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { momentService } from "../../services/momentService";

import { VUpload } from "../../views/VUpload/VUpload";
import { ViewContainer } from "../Styles.styled";
export const Upload = () => {

    const navigate = useNavigate();
    const s = 1;
    const ms = s*1000;

    const upload = (data) => {
        console.log('moment to upload: ',data);
        momentService.postMoment(data).then(res =>{
            if (res) setTimeout(()=>navigate('/home'), ms)
        })
    }

    return (
        <ViewContainer>
            <VUpload action={upload} location={'home'} />
        </ViewContainer>
    )
}