import React, { useEffect, useState } from "react";
import { generalServices } from "../../services/generalServices";
import { momentService } from "../../services/momentService";
import { useNavigate, useParams } from "react-router-dom";
import { HiddenContainerDT, HiddenContainerMB, ViewContainer, NoScrollContainer, View, OverlayContainer } from "../Styles.styled";
import { VDetailDT } from "../../views/VDetail/VDetailDT";
import { VDetailMB } from "../../views/VDetail/VDetailMB";
import { VUpload } from "../../views/VUpload";
import { PreviewCard } from "../../components/Cards/PreviewCard";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { InfoModal } from "../../components/Modals/InfoModal";
import { ConfirmModal } from "../../components/Modals/ConfirmModal";
import { userService } from "../../services/userService";

export const MomentDetail = () => {

    const [id, setId] = useState(useParams().id)
    const [moment, setMoment] = useState();
    const [user, setUser] = useState();

    const [msg, setMsg] = useState();
    const [question, setQuestion] = useState();
    const [dialogData, setDialogData] = useState();

    const path = window.location.pathname;
    const [location, setLocation] = useState(path);
    const [nextLocation, setNextLocation] = useState(generalServices.cutString(path, "/", "/detail"));

    const [isUpdateActive, setIsUpdateActive] = useState(false);
    const [momentToUpdate, setMomentToUpdate] = useState();
    const [updatedMoment, setUpdatedMoment] = useState();

    const [isLoading, setIsLoading] = useState(true);
    const [momentsIds, setMomentsIds] = useState([]);

    const navigate = useNavigate();
    const s = 1;
    const ms = s * 1000;


    useEffect(() => {
        getMoment();
        getIds();
        setTimeout((() => setIsLoading(false)), ms);
    }, [id])

    const getMoment = () => {
        momentService.getMoment(id).then(res => {
            if (res) {
                setMoment(res);
                getUser(parseInt(res.userId));
            }
        })
    }

    const getIds = () => {
        momentService.getProfileIds().then(res => {
            if (res) setMomentsIds(res);
        })
    }

    const getUser = (id) => {
        userService.getUser(id).then(res => { if (res) setUser(res) })
    }

    const update = (data) => {
        setIsUpdateActive(true);
        setMomentToUpdate(data);
    }

    const erase = (data) => {
        openDialog(`Do you really want to delete moment with id: ${data.id}?`, data);
    }

    const confirmDelete = (data) => {
        closeDialog();
        momentService.deleteMoment(data.id).then(res => {
            if (res) {
                openModal(`Moment with id: ${data.id} erased successfully!`);
                setTimeout(() => { navigate('/home'); }, ms)
            }
        })
    }

    const showPreview = (data) => {
        setIsUpdateActive(false);
        updateData(data);
    }

    const updateData = (data) => {
        let moment = { ...momentToUpdate, ...data }
        setUpdatedMoment(moment);
    }

    const confirmUpdate = () => {
        momentService.updateMoment(generalServices.objToLowerCase(updatedMoment), updatedMoment.id).then(res => {
            if (res) {
                openModal(`Moment with id: ${updatedMoment.id} updated successfully!`)
                setMoment();
                getMoment();
                setUpdatedMoment();
                setMomentToUpdate();
            }
        })
    }

    const cancelUpdate = () => {
        setUpdatedMoment();
        setIsUpdateActive(true);
    }

    const closeUpdate = () => {
        setIsUpdateActive(false);
        setMomentToUpdate();
    }

    const openModal = (msg) => {
        setMsg(msg)
    }

    const openDialog = (question, data) => {
        setQuestion(question);
        setDialogData(data)
    }

    const closeModal = () => {
        setMsg();
    }

    const closeDialog = () => {
        setQuestion();
        setDialogData();
    }

    const like = (data) => {
        momentService.likeMoment(data, data.id).then(res => {
            if (res) {
                getMoment();
            }
        })
    }

    const save = (data) => {
        momentService.saveMoment(data, data.id).then(res => {
            if (res) {
                getMoment();
            }
        })
    }

    const slide = (direction) => {
        setMoment();
        setIsLoading(true);
        let current = findCurrentPos();
        direction === 'back' ? current -= 1 : current += 1;
        if (current > momentsIds.length - 1) current = 0;
        if (current < 0) current = momentsIds.length - 1;
        setId(momentsIds[current]);
        navigate(`/profile/detail/${momentsIds[current]}`)
    }

    const findCurrentPos = () => {
        for (let i = 0; i <= momentsIds.length - 1; i++) {
            if (momentsIds[i] === parseInt(id)) return i;
        }
    }

    return (
        <>{moment !== undefined && user !== undefined && !isLoading ?
            <ViewContainer>
                <HiddenContainerMB>
                    {!isUpdateActive && updatedMoment == undefined ?
                        <VDetailDT moment={moment} user={user} location={nextLocation} update={update} erase={erase} like={like} save={save} slide={slide} />
                        : null}
                    <>{location.includes("profile") ? <Profile /> : <Home />}</>
                </HiddenContainerMB>

                <HiddenContainerDT>
                    <VDetailMB moment={moment} user={user} location={nextLocation} update={update} erase={erase} like={like} save={save} />
                </HiddenContainerDT>
                <>
                    {isUpdateActive || updatedMoment ?
                        <NoScrollContainer>
                            {isUpdateActive ? <View bgColor={'--main-bg'} width={'95%'} ><VUpload closeUpdate={closeUpdate} moment={momentToUpdate} action={showPreview} title={'update'} /></View> : null}
                            {updatedMoment ? <PreviewCard moment={updatedMoment} user={user} confirm={confirmUpdate} cancel={cancelUpdate} title={'update'} /> : null}
                        </NoScrollContainer>
                        :
                        null
                    }
                </>
            </ViewContainer>
            :
            <ViewContainer>{!isLoading ? <h1>this moment does not exist</h1> : <h1>loader</h1>}</ViewContainer>
        }
            {msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}
            {question !== undefined ? <ConfirmModal question={question} closeDialog={closeDialog} confirm={confirmDelete} data={dialogData} /> : null}
        </>

    )
};