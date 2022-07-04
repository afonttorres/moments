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
import { userService } from "../../services/userService";
import { momentAPIService } from "../../services/momentAPIService";

export const Upload = () => {

    const navigate = useNavigate();
    const s = 1;
    const ms = s * 1000;

    const [moment, setMoment] = useState();
    const [isPreviewActive, setIsPreviewACtive] = useState(false);
    const [msg, setMsg] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        getUser();
    }, [])

    useEffect(() => {
    }, [moment])

    const getUser = () => {
        const log = JSON.parse(localStorage.getItem('log'));
        if (!log) return;
        let id = parseInt(log.log_id);
        userService.getUser(id).then(res => {
            if (res) setUser(res);
        })
    }

    const upload = (data) => {
        let momentUser = { ...data, "userId": user }
        setMoment(momentUser);
        setIsPreviewACtive(true);
    }

    const confirm = () => {
        let newMoment = { ...moment, userId: moment.userId.id };
        momentAPIService.postMoment(generalServices.objToLowerCase(newMoment)).then(res => {
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