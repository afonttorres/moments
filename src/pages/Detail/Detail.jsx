import React, { useEffect, useState } from "react";
import { generalServices } from "../../services/generalServices";
import { momentService } from "../../services/momentService";
import { useNavigate, useParams } from "react-router-dom";
import { HiddenContainerDT, HiddenContainerMB, ViewContainer, NoScrollContainer, View } from "../Styles.styled";
import { VDetailDT } from "../../views/VDetail/VDetailDT";
import { VDetailMB } from "../../views/VDetail/VDetailMB";
import { VUpload } from "../../views/VUpload";
import { PreviewCard } from "../../components/Cards/PreviewCard";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { InfoModal } from "../../components/Modals/InfoModal";
import { ConfirmModal } from "../../components/Modals/ConfirmModal";

export const MomentDetail = () => {

    const [id, setId] = useState(useParams().id)
    const [moment, setMoment] = useState();

    const [msg, setMsg] = useState();
    const [question, setQuestion] = useState();
    const [dialogData, setDialogData] = useState();

    const path = window.location.pathname;
    const [location, setLocation] = useState(path);
    const [nextLocation, setNextLocation] = useState(generalServices.cutString(path, "/", "/detail"));

    const [isUpdateActive, setIsUpdateActive] = useState(false);
    const [momentToUpdate, setMomentToUpdate] = useState();
    const [updatedMoment, setUpdatedMoment] = useState();

    const navigate = useNavigate();
    const s = 3;
    const ms = s * 1000;

    useEffect(() => {
        getMoment();
    }, [])

    useEffect(() => {

    }, [moment])

    const getMoment = () => {
        momentService.getMoment(id).then(res => {
            if (res) {
                setMoment(res)
            }
        })
    }

    const update = (data) => {
        setIsUpdateActive(true);
        setMomentToUpdate(data);
    }

    const erase = (data) => {
        openDialog(`Do you really want to delete moment with id: ${data.id}?`, data);
    }

    const confirmDelete = (data)=>{
        closeDialog();
        momentService.deleteMoment(data.id).then(res => {
            if (res) {
                openModal(`Moment with id: ${data.id} erased successfully!`);
                setTimeout(()=>{navigate('/home');}, ms)
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

    const openModal = (msg) =>{
        setMsg(msg)
    }

    const openDialog = (question, data) => {
        setQuestion(question);
        setDialogData(data)
    }

    const closeModal = () =>{
        setMsg();
    }

    const closeDialog = () => {
        setQuestion();
        setDialogData();
    }

    return (
        <>{moment !== undefined ?
            <ViewContainer>
                <HiddenContainerMB>
                    {!isUpdateActive && updatedMoment == undefined ?
                        <VDetailDT moment={moment} location={nextLocation} update={update} erase={erase} />
                        : null}
                    <>{location.includes("profile") ? <Profile /> : <Home />}</>
                </HiddenContainerMB>

                <HiddenContainerDT>
                    <VDetailMB moment={moment} location={nextLocation} update={update} erase={erase} />
                </HiddenContainerDT>
                <>
                    {isUpdateActive || updatedMoment ?
                        <NoScrollContainer>
                            {isUpdateActive ? <View bgColor={'--main-bg'} width={'95%'} ><VUpload closeUpdate={closeUpdate} moment={momentToUpdate} action={showPreview} title={'update'}/></View> : null}
                            {updatedMoment ? <PreviewCard moment={updatedMoment} confirm={confirmUpdate} cancel={cancelUpdate} title={'update'}/> : null}
                        </NoScrollContainer>
                        : null}
                </>
            </ViewContainer>
            : null}
            {msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}
            {question !== undefined ? <ConfirmModal question={question} closeDialog={closeDialog} confirm={confirmDelete} data={dialogData}/> : null}
        </>

    )
};