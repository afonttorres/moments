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

export const MomentDetail = () => {

    const [id, setId] = useState(useParams().id)
    const [moment, setMoment] = useState();
    const [msg, setMsg] = useState();

    const path = window.location.pathname;
    const [location, setLocation] = useState(path);
    const [nextLocation, setNextLocation] = useState(generalServices.cutString(path, "/", "/detail"));

    const [isUpdateActive, setIsUpdateActive] = useState(false);
    const [momentToUpdate, setMomentToUpdate] = useState();
    const [updatedMoment, setUpdatedMoment] = useState();

    const navigate = useNavigate();

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
        momentService.deleteMoment(data.id).then(res => {
            if (res) {
                setMsg(`Moment with id: ${data.id} erased successfully!`);
                navigate('/home');
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
        momentService.updateMoment(updatedMoment, updatedMoment.id).then(res => {
            if (res) {
                setMsg(`Moment with id: ${updatedMoment.id} updated successfully!`)
                setMoment();
                getMoment();
                setUpdatedMoment();
                setMomentToUpdate();
            }
        })
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

    console.log(msg !== undefined ? msg : 'No msg')
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
        </>

    )
};