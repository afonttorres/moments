import React, { useEffect, useState } from 'react';
import data from '../../mockMoments.json';
import { Feed } from '../../components/Feeds/Feed';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import { ViewContainer, View, NoScrollContainer } from '../Styles.styled';
import { VUpload } from '../../views/VUpload/VUpload';
import { PreviewCard } from '../../components/Cards/PreviewCard';


export const Home = () => {

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
        <ViewContainer>
            <Nav isLogged={true} />
            <View>
                <Feed location="home" moments={moments} update={update} erase={erase} />
            </View>
            <Footer />
            <>
                {isUpdateActive || updatedMoment ?
                    <NoScrollContainer id='noscroll'>
                        {isUpdateActive ? <View bgColor={'--main-bg'} width={'95%'} ><VUpload closeUpdate={closeUpdate} moment={momentToUpdate} action={showPreview} /></View> : null}
                        {updatedMoment ? <PreviewCard moment={updatedMoment} confirm={confirmUpdate} cancel={cancelUpdate} /> : null}
                    </NoScrollContainer>
                    : null}
            </>
        </ViewContainer>

    );
}