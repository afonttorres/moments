import React, { useEffect, useState } from "react";
import { generalServices } from "../../services/generalServices";
import { useNavigate, useParams } from "react-router-dom";
import moments from '../../mockMoments.json';
import { HiddenContainerDT, HiddenContainerMB, ViewContainer, NoScrollContainer, View, MainContainer, OverlayContainer } from "../Styles.styled";
import { VDetailDT } from "../../views/VDetail/VDetailDT";
import { VDetailMB } from "../../views/VDetail/VDetailMB";
import { VUpload } from "../../views/VUpload";
import { PreviewCard } from "../../components/Cards/PreviewCard";
import { CloseButton } from "../../components/Buttons/CloseButton";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";

export const MomentDetail = () => {

    const findMoment = () => {
        let foundMoment = moments.filter(moment => moment.id == id);
        foundMoment = foundMoment[0];
        return foundMoment;
    }

    const [id, setId] = useState(useParams().id)
    const [moment, setMoment] = useState(findMoment());

    const path = window.location.pathname;
    const [location, setLocation] = useState(path);
    const [nextLocation, setNextLocation] = useState(generalServices.cutString(path, "/", "/detail"));

    const [isUpdateActive, setIsUpdateActive] = useState(false);
    const [momentToUpdate, setMomentToUpdate] = useState();
    const [updatedMoment, setUpdatedMoment] = useState();

    const navigate = useNavigate();


    const update = (data) => {
        setIsUpdateActive(true);
        setMomentToUpdate(data);
    }

    const erase = (data) => {
        console.log('delete detail: ', data);
        //momentService.deleteMoment();
        navigate('/home');
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
        console.log('confirmed to update: ', updatedMoment);
        //momentService.updateMoment(updatedMoment);
        //momentService.getMomentDetail();
        setUpdatedMoment();
        setMomentToUpdate();
    }

    const cancelUpdate = () => {
        console.log('canceled to update: ', momentToUpdate);
        setUpdatedMoment();
        setIsUpdateActive(true);
    }

    const closeUpdate = () => {
        setIsUpdateActive(false);
        setMomentToUpdate();
    }


    return (
        <ViewContainer>
            <HiddenContainerMB>
                {!isUpdateActive && updatedMoment == undefined ?
                    <NoScrollContainer>
                        <CloseButton location={nextLocation} color={"--font-color-plain-bg"} />
                        <VDetailDT moment={moment} update={update} erase={erase} />
                    </NoScrollContainer>
                    : null}
                <>{location.includes("profile") ? <Profile /> : <Home />}</>
            </HiddenContainerMB>
            
            <HiddenContainerDT>
                <VDetailMB moment={moment} update={update} erase={erase} />
            </HiddenContainerDT>
            <>
                {isUpdateActive || updatedMoment ?
                    <NoScrollContainer>
                        {isUpdateActive ? <View bgColor={'--main-bg'} width={'95%'} ><VUpload closeUpdate={closeUpdate} moment={momentToUpdate} action={showPreview} /></View> : null}
                        {updatedMoment ? <PreviewCard moment={updatedMoment} confirm={confirmUpdate} cancel={cancelUpdate} /> : null}
                    </NoScrollContainer>
                    : null}
            </>
        </ViewContainer>
    )
};