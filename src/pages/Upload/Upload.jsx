import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VUpload } from "../../views/VUpload/VUpload";
import { NoScrollContainer, ViewContainer } from "../Styles.styled";
import { PreviewCard } from '../../components/Cards/PreviewCard';
import { useEffect } from "react";
import { formatUtil } from "../../utils/format";
import { InfoModal } from "../../components/Modals/InfoModal";
import { momentAPIService } from "../../services/momentAPIService";
import { userAPIService } from "../../services/userAPIService";
import { authUtil } from "../../utils/auth";

export const Upload = () => {

    const navigate = useNavigate();
    const s = 1;
    const ms = s * 1000;

    const [moment, setMoment] = useState();
    const [isPreviewActive, setIsPreviewACtive] = useState(false);
    const [msg, setMsg] = useState();

    const [loggedId, setLoggedId] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        findLogged();
    }, [])

    useEffect(() => {
        if (!loggedId) return;
        getUser();
    }, [loggedId])

    useEffect(() => {
    }, [moment])


    //GETTERS
    const getUser = () => {
        userAPIService.getUser(loggedId).then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                return;
            }
            const castedUser = formatUtil.castObj({ ...res }, ['avatarUrl', 'username', 'id']);
            setUser(castedUser)
        })
    }

    const findLogged = () => {
        const logged = authUtil.getLoggedUser();
        if (!logged) return;
        setLoggedId(logged);
    }

    //UPLOAD
    const upload = (data) => {
        setMoment({ ...data, "creator": user });
        setIsPreviewACtive(true);
    }

    const confirm = () => {
        momentAPIService.postMoment(formatUtil.objToLowerCase(moment)).then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                return;
            }
            setMoment();
            setIsPreviewACtive(false);
            openModal(`Moment added succesfully!`)
            setTimeout(() => navigate('/home'), ms * .5);
        })
    }

    const cancel = () => {
        setIsPreviewACtive(false);
    }

    //MODALS
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