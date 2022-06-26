import React, { useState } from "react";
import mockUser from '../../mockUser.json';
import { useNavigate } from "react-router-dom";
import { momentService } from "../../services/momentService";
import { VUpload } from "../../views/VUpload/VUpload";
import { NoScrollContainer, ViewContainer } from "../Styles.styled";
import { PreviewCard } from '../../components/Cards/PreviewCard';
import { useEffect } from "react";

export const Upload = () => {

    const navigate = useNavigate();
    const s = 1;
    const ms = s * 1000;

    const [moment, setMoment] = useState();
    const [isPreviewActive, setIsPreviewACtive] = useState(false);

    useEffect(()=>{

    },[moment])

    const upload = (data) => {
        console.log('moment to upload: ', data);
        let momentUser = { ...data, "user": mockUser[0] }
        setMoment(momentUser);
        setIsPreviewACtive(true);
    }

    const confirm = () => {
        momentService.postMoment(moment).then(res => {
            if (res) {
                setMoment();
                setIsPreviewACtive(false);
                setTimeout(() => navigate('/home'), ms)
            }
        })
    }

    const cancel = () => {
        setIsPreviewACtive(false);
    }

    return (
        <ViewContainer>
            <VUpload action={upload} location={'home'} moment={moment} title={'upload'}/>
            <>{isPreviewActive ? <NoScrollContainer><PreviewCard moment={moment} confirm={confirm} cancel={cancel} title={'upload'}/></NoScrollContainer> : null}</>
        </ViewContainer>
    )
}