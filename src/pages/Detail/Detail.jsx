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

export const MomentDetail = () => {

    const [momentId, setMomentId] = useState(useParams().momentId);
    const [profileId, setProfileId] = useState(useParams().profileId);
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
        setTimeout((() => setIsLoading(false)), ms);
    }, [momentId])

    useEffect(() => {
        if (profileId) getUser(profileId);
    }, [profileId])


    //GETTERS
    const getMoment = () => {
        momentAPIService.getMoment(momentId).then(res => {
            if (res) {
                setMoment(res);
                if (!profileId) getUser(parseInt(res.userId));
            }
        })
    }

    const getUser = (id) => {
        userService.getUser(id).then(res => {
            if (res) {
                setUser(res);
                getIds(parseInt(res.id));
            }
        })
    }

    const getIds = (id) => {
        momentAPIService.getProfileIds(id).then(res => {
            if (res) setMomentsIds(res);
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
        momentAPIService.updateMoment(generalServices.objToLowerCase(updatedMoment), updatedMoment.id).then(res => {
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

    //ERASE
    const erase = (data) => {
        openDialog(`Do you really want to delete moment with id: ${data.id}?`, data);
    }

    const confirmDelete = (data) => {
        closeDialog();
        momentAPIService.deleteMoment(data.id).then(res => {
            if (res) {
                openModal(`Moment with id: ${data.id} erased successfully!`);
                setTimeout(() => { navigate('/home'); }, ms)
            }
        })
    }

    //LIKE
    const like = (data) => {
        momentAPIService.likeMoment(data, data.id).then(res => {
            if (res) {
                getMoment();
            }
        })
    }

    //SAVE
    const save = (data) => {
        momentAPIService.saveMoment(data, data.id).then(res => {
            if (res) {
                getMoment();
            }
        })
    }

    //CREATE COMMENT
    const createComment = (comment) => {
        comment = { ...comment, userId: user.id };
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
        <>{moment !== undefined && user !== undefined && !isLoading ?
            <ViewContainer>
                <HiddenContainerMB>
                    {!isUpdateActive && updatedMoment == undefined ?
                        <VDetailDT moment={moment} user={user} location={location} nextLocation={nextLocation} update={update} erase={erase} like={like} save={save} slide={slide} createComment={createComment} />
                        : null}
                </HiddenContainerMB>

                <HiddenContainerDT>
                    <VDetailMB moment={moment} user={user} location={nextLocation} update={update} erase={erase} like={like} save={save} createComment={createComment} />
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