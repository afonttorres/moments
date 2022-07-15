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
import { momentAPIService } from "../../services/momentAPIService";
import { userAPIService } from "../../services/userAPIService";
import { dataService } from "../../services/dataServices";
import { Loader } from '../../components/Loader/Loader';

export const Upload = () => {

    const navigate = useNavigate();
    const s = 1;
    const ms = s * 1000;

    const [moment, setMoment] = useState();
    const [isPreviewActive, setIsPreviewACtive] = useState(false);
    const [msg, setMsg] = useState();
    const [isLoadding, setIsLoading] = useState(false);

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
            if (res) {
                const castedUser = generalServices.castObj({ ...res }, ['avatarUrl', 'username', 'id']);
                setUser(castedUser)
            }
        })
    }

    const findLogged = () => {
        const logged = dataService.getLoggedUser();
        if (!logged) return;
        setLoggedId(logged);
    }

    //UPLOAD
    const upload = (data) => {
        setMoment({ ...data, "creator": user });
        setIsPreviewACtive(true);
    }

    const confirm = () => {
        momentAPIService.postMoment(generalServices.objToLowerCase(moment)).then(res => {
            if (res) {
                setMoment();
                setIsPreviewACtive(false);
                openModal(`Moment added succesfully!`)
                setTimeout(() => navigate('/home'), ms*.5);
            }
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
            <>{isLoadding ? <Loader /> : null}</>
        </>
    )
}