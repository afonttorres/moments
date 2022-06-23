import React, { useEffect, useState } from 'react';
import data from '../../mockMoments.json';
import { Feed } from '../../components/Feeds/Feed';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import { ViewContainer, View, NoScrollContainer } from '../Styles.styled';
import { VUpload } from '../../views/VUpload/VUpload';
import { PreviewCard } from '../../components/Cards/PreviewCard';
import { momentService } from '../../services/momentService';
import { userService } from '../../services/userService';


export const Home = () => {

    const [moments, setMoments] = useState([]);
    const [msg, setMsg] = useState();

    const [isUpdateActive, setIsUpdateActive] = useState(false);
    const [momentToUpdate, setMomentToUpdate] = useState();
    const [updatedMoment, setUpdatedMoment] = useState();

    useEffect(() => {
        getData();
    }, [])

    useEffect(()=>{

    },[moments])

    const getData = () => {
        momentService.getAllMoments().then(res => { if (res) setMoments(res) });
    }


    const erase = (data) => {
        //modal confirmació
        momentService.deleteMoment(data.id).then(res => {
            if (res) {
                setMsg(`Moment with id: ${data.id} erased successfully!`)
                getData()
            }
        })
    }

    const update = (data) => {
        setIsUpdateActive(true);
        setMomentToUpdate(data);
    }

    const updateData = (data) => {
        let moment = { ...momentToUpdate, ...data }
        setUpdatedMoment(moment);
    }

    const showPreview = (data) => {
        setIsUpdateActive(false);
        updateData(data);
    }

    const confirmUpdate = () => {
        momentService.updateMoment(updatedMoment, updatedMoment.id).then(res =>{
            if(res){
                setMsg(`Moment with id: ${updatedMoment.id} updated successfully!`)
                getData();
            }
        })
        setUpdatedMoment();
        setMomentToUpdate();
    }

    const cancelUpdate = () => {
        setUpdatedMoment();
        setIsUpdateActive(true);
    }

    const closeUpdate = () => {
        setIsUpdateActive(false);
        setMomentToUpdate();
    }

    const like = (data) =>{
        momentService.likeMoment(data, data.id).then(res =>{
            if(res){
                setMsg(`Moment with id: ${data.id} liked successfully!`)
                getData();
            }
        })
    }


    console.log(msg ? msg : 'No msg')
    return (
        <ViewContainer>
            <Nav isLogged={true} />
            <View>
                <Feed location="home" moments={moments} update={update} erase={erase} like={like}/>
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