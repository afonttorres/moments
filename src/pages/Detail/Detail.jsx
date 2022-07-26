import React, { useEffect, useState } from "react";
import { formatUtil } from "../../utils/format";
import { useNavigate, useParams } from "react-router-dom";
import { HiddenContainerDT, HiddenContainerMB, ViewContainer, NoScrollContainer, View } from "../Styles.styled";
import { VDetailDT } from "../../views/VDetail/VDetailDT";
import { VDetailMB } from "../../views/VDetail/VDetailMB";
import { VUpload } from "../../views/VUpload";
import { PreviewCard } from "../../components/Cards/PreviewCard";
import { InfoModal } from "../../components/Modals/InfoModal";
import { ConfirmModal } from "../../components/Modals/ConfirmModal";
import { momentAPIService } from "../../services/momentAPIService";
import { commentAPIService } from "../../services/commentAPIService";
import { Loader } from "../../components/Loader/Loader";
import { likeAPIService } from "../../services/likeAPIService";
import { saveAPIService } from "../../services/saveAPIService";

export const MomentDetail = () => {

    const [momentId, setMomentId] = useState(useParams().momentId);
    const { profileId } = useParams();

    const [moment, setMoment] = useState();
    const [comments, setComments] = useState();

    const [msg, setMsg] = useState();
    const [question, setQuestion] = useState();
    const [dialogData, setDialogData] = useState();

    const location = window.location.pathname;
    const nextLocation = formatUtil.cutString(location, "/", "/detail");

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
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                return;
            }
            setMoment(res);
            getComments();
            getUserMomentsIds();
        })
    }
    const getComments = () => {
        commentAPIService.getMomentComents(momentId).then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                return;
            }
            setComments(res);
        })
    }

    const getUserMomentsIds = () => {
        if (!profileId) return;
        momentAPIService.getUserMomentsIds(profileId).then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                return;
            }
            setMomentsIds(res)
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
        setIsLoading(true);
        momentAPIService.updateMoment(formatUtil.objToLowerCase(updatedMoment)).then(res => {
            if (!res) return;
            setUpdatedMoment();
            setMomentToUpdate()
            if (res.error) {
                setIsLoading(false);
                openModal(res.error);
                return;
            }
            openModal(`Moment with id: ${res.id} updated successfully!`);
            setTimeout(() => {
                closeModal();
            }, ms * .5)
            setTimeout(() => {
                getMoment();
                setTimeout((() => setIsLoading(false)), ms * 3);
            }, ms);
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
        likeAPIService.like(data.id).then(res => {
            if (res === null || res === undefined) return;
            res.error ? openModal(res.error) : getMoment();
            //openModal(`Sorry, you can't like your own moment!`);
        })
    }

    //SAVE
    const save = (data) => {
        saveAPIService.save(data.id).then(res => {
            if (res === null || res === undefined) return;
            res.error ? openModal(res.error) : getMoment();
            //openModal(`Sorry, you can't save your own moment!`);
        })
    }

    //CREATE COMMENT
    const createComment = (comment) => {
        commentAPIService.postComment(comment).then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                return;
            }
            getMoment();
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
                    {!isUpdateActive && updatedMoment === undefined ?
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
            <ViewContainer>{!isLoading ? <h1>this moment does not exist</h1> : <Loader />}</ViewContainer>
        }
            {msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}
            {question !== undefined ? <ConfirmModal question={question} closeDialog={closeDialog} confirm={confirmDelete} data={dialogData} /> : null}
        </>

    )
};