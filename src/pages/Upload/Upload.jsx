import React, { useState } from "react";
import mockUser from '../../mockUser.json';
import { useNavigate } from "react-router-dom";
import { momentService } from "../../services/momentService";
import { VUpload } from "../../views/VUpload/VUpload";
import { NoScrollContainer, ViewContainer } from "../Styles.styled";
import { PreviewCard } from '../../components/Cards/PreviewCard';
import { useEffect } from "react";
import { generalServices } from "../../services/generalServices";
import { InfoModal } from "../../components/Modals/InfoModal";

export const Upload = () => {

    const navigate = useNavigate();
    const s = 1;
    const ms = s * 1000;

    const [moment, setMoment] = useState();
    const [isPreviewActive, setIsPreviewACtive] = useState(false);
    const [msg, setMsg] = useState();

    useEffect(() => {

    }, [moment])

    const upload = (data) => {
        console.log('moment to upload: ', data);
        let momentUser = { ...data, "user": mockUser[0] }
        setMoment(momentUser);
        setIsPreviewACtive(true);
    }

    const confirm = () => {
        momentService.postMoment(generalServices.objToLowerCase(moment)).then(res => {
            if (res) {
                setMoment();
                setIsPreviewACtive(false);
                openModal(`Moment added succesfully!`)
                setTimeout(() => navigate('/home'), ms);
            }
        })
    }

    const cancel = () => {
        setIsPreviewACtive(false);
    }

    const openModal = (msg) => {
        setMsg(msg);
    }

    const closeModal = () => {
        setMsg();
    }

    return (
        <>
            <ViewContainer>
                <VUpload action={upload} location={'home'} moment={moment} title={'upload'} openModal={openModal} />
                <>{isPreviewActive ? <NoScrollContainer><PreviewCard moment={moment} confirm={confirm} cancel={cancel} title={'upload'} /></NoScrollContainer> : null}</>
            </ViewContainer>
            <>{msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}</>
        </>
    )
}