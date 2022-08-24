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
import { AuthService } from "../../services/AuthService";
import { cloudinaryAPIService } from "../../services/cloudinaryAPIService";
import { Loader } from "../../components/Loader/Loader";

export const Upload = () => {

    const navigate = useNavigate();
    const s = 1;
    const ms = s * 1000;

    const [moment, setMoment] = useState();
    const [isPreviewActive, setIsPreviewACtive] = useState(false);
    const [msg, setMsg] = useState();
    const [isLoading, setIsLoading] = useState(false);

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

    useEffect(() => {
        if (!isLoading) return;
    }, [isLoading])


    //GETTERS
    const getUser = () => {
        userAPIService.getUser(loggedId).then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                return;
            }
            const castedUser = formatUtil.castObj({ ...res }, ['avatarUrl', 'username', 'id']);
            setUser(castedUser);
        })
    }

    const findLogged = () => {
        AuthService.getAuth() ? setLoggedId(AuthService.getAuth().id) : openModal(`Moments can't be uploaded if you are not logged`);
    }

    //UPLOAD IMG
    const uploadImg = (data) => {
        let { file, ...rest } = data;
        setIsLoading(true);
        cloudinaryAPIService.uploadImage(file).then(res => {
            if (!res) {
                openModal('Something went wrong')
                return
            };
            setMoment({ ...rest, imgUrl: res.url });
            setIsLoading(false);
        })
    }

    //UPLOAD MOMENT
    const upload = (data) => {
        setMoment({ ...data, "creator": user });
        setIsPreviewACtive(true);
    }

    const confirm = () => {
        delete moment.creator;
        momentAPIService.postMoment(formatUtil.objToLowerCase(moment)).then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                return;
            }
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
                {isLoading ? <Loader />
                    : <>
                        <VUpload action={upload} uploadImg={uploadImg} location={'home'} moment={moment} title={'upload'} openModal={openModal} />
                        <>{isPreviewActive ? <NoScrollContainer><PreviewCard moment={moment} confirm={confirm} cancel={cancel} title={'upload'} /></NoScrollContainer> : null}</>
                    </>
                }
            </ViewContainer>
            <>{msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}</>

        </>
    )
}