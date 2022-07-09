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
import { momentAPIService } from "../../services/momentAPIService";
import { commentAPIService } from "../../services/commentAPIService";
import { dataService } from "../../services/dataServices";

export const MomentDetail = () => {

    const [momentId, setMomentId] = useState(useParams().momentId);
    const [profileId, setProfileId] = useState(useParams().profileId);

    const [moment, setMoment] = useState();
    const [comments, setComments] = useState();

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
        setTimeout((() => setIsLoading(false)), ms);
    }, [momentId])

    //GETTERS
    const getMoment = () => {
        momentAPIService.getMoment(momentId).then(res => {
            if (res) {
                setMoment(res);
                getComments();
                getUserMomentsIds();
            }
        })
    }
    const getComments = () => {
        commentAPIService.getMomentComents(momentId).then(res => {
            if (res) setComments(res);
        })
    }

    const getUserMomentsIds = () => {
        if (!profileId) return;
        momentAPIService.getUserMomentsIds(profileId).then(res => {
            if (res) setMomentsIds(res)
        })
    }

    //UPDATE
    const update = (data) => {
        setIsUpdateActive(true);
        setMomentToUpdate(data);
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
        momentAPIService.updateMoment(generalServices.objToLowerCase(updatedMoment)).then(res => {
            !res ? openModal(`Sorry, you can't update a moment that is not yours.`) : openModal(`Moment with id: ${res.id} updated successfully!`);
            getMoment();
            setUpdatedMoment();
            setMomentToUpdate();
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

    //ERASE
    const erase = (data) => {
        openDialog(`Do you really want to delete moment with id: ${data.id}?`, data);
    }

    const confirmDelete = (data) => {
        closeDialog();
        momentAPIService.deleteMoment(data.id).then(res => {
            !res ? openModal(`Sorry, you can't delete a moment that is not yours.`) : openModal(`Moment with id: ${res.id} erased successfully!`);
            setTimeout(() => { navigate('/home'); }, ms);
        })
    }

    //LIKE
    const like = (data) => {
        momentAPIService.likeMoment(data.id).then(res => {
            res ? getMoment() : openModal(`Sorry, you can't like your own moment!`);
        })
    }

    //SAVE
    const save = (data) => {
        momentAPIService.saveMoment(data.id).then(res => {
            res ? getMoment() : openModal(`Sorry, you can't save your own moment!`);
        })
    }

    //CREATE COMMENT
    const createComment = (comment) => {
        commentAPIService.postComment(comment).then(res => {
            if (res) {
                getMoment();
            }
        })
    }

    //MODALS
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


    //UX METHODS
    const slide = (direction) => {
        if (momentsIds.length <= 1) return;
        setMoment();
        setIsLoading(true);
        let current = findCurrentPos();
        direction === 'back' ? current -= 1 : current += 1;
        if (current > momentsIds.length - 1) current = 0;
        if (current < 0) current = momentsIds.length - 1;
        setMomentId(momentsIds[current]);
        profileId ? navigate(`/profile/${profileId}/detail/${momentsIds[current]}`) : navigate(`/profile/detail/${momentsIds[current]}`);
    }

    const findCurrentPos = () => {
        for (let i = 0; i <= momentsIds.length - 1; i++) {
            if (momentsIds[i] === parseInt(momentId)) return i;
        }
    }

    return (
        <>{moment !== undefined && comments !== undefined && !isLoading ?
            <ViewContainer>
                <HiddenContainerMB>
                    {!isUpdateActive && updatedMoment == undefined ?
                        <VDetailDT moment={moment} comments={comments} location={location} nextLocation={nextLocation} update={update} erase={erase} like={like} save={save} slide={slide} createComment={createComment} />
                        : null}
                </HiddenContainerMB>

                <HiddenContainerDT>
                    <VDetailMB moment={moment} comments={comments} location={nextLocation} update={update} erase={erase} like={like} save={save} slide={slide} createComment={createComment} />
                </HiddenContainerDT>
                <>
                    {isUpdateActive || updatedMoment ?
                        <NoScrollContainer>
                            {isUpdateActive ? <View bgColor={'--main-bg'} width={'95%'} ><VUpload closeUpdate={closeUpdate} moment={momentToUpdate} action={showPreview} title={'update'} /></View> : null}
                            {updatedMoment ? <PreviewCard moment={updatedMoment} confirm={confirmUpdate} cancel={cancelUpdate} title={'update'} /> : null}
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