import React, { useEffect, useState } from "react";
import data from '../../mockMoments.json';
import { MainContainer, NoScrollContainer, View } from "../../pages/Styles.styled";
import { Card } from '../Cards/Card';
import { FeedContainer } from "./Feed.styled";
import { VUpload } from '../../views/VUpload';
import { PreviewCard } from "../Cards/PreviewCard";

export const Feed = (props) => {

    const [moments, setMoments] = useState([]);

    const [isUpdateActive, setIsUpdateActive] = useState(false);
    const [momentToUpdate, setMomentToUpdate] = useState();
    const [updatedMoment, setUpdatedMoment] = useState();

    useEffect(() => {
        setMoments(data);
    }, [])

    const update = (data) => {
        setIsUpdateActive(true);
        setMomentToUpdate(data);
    }

    const erase = (data) => {
        console.log('feed delete: ', data);
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
        //momentService.getMoments();
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
        <>
            <MainContainer id='main-feed'>
                <FeedContainer>{moments.map((moment, key) =>
                    <Card key={moment.id} moment={moment} location={props.location} update={update} erase={erase} />)}
                </FeedContainer>
            </MainContainer>
            <>
                {isUpdateActive || updatedMoment ?
                    <NoScrollContainer id='noscroll'>
                        {isUpdateActive ? <View bgColor={'--main-bg'} width={'95%'} ><VUpload closeUpdate={closeUpdate} moment={momentToUpdate} action={showPreview} /></View> : null}
                        {updatedMoment ? <PreviewCard moment={updatedMoment} confirm={confirmUpdate} cancel={cancelUpdate} /> : null}
                    </NoScrollContainer>
                    : null}
            </>
        </>
    );
}