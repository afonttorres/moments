import React, { useEffect, useState } from 'react';
import data from '../../mockMoments.json';
import { Feed } from '../../components/Feeds/Feed';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Navs/Nav';
import { ViewContainer, View, NoScrollContainer } from '../Styles.styled';
import { VUpload } from '../../views/VUpload/VUpload';
import { PreviewCard } from '../../components/Cards/PreviewCard';
import { momentService } from '../../services/momentService';
import { generalServices } from '../../services/generalServices';
import { InfoModal } from '../../components/Modals/InfoModal';
import { ConfirmModal } from '../../components/Modals/ConfirmModal';
import { userService } from '../../services/userService';
import { dataService } from '../../services/dataServices';
import { momentAPIService } from '../../services/momentAPIService';


export const Home = () => {

    const [moments, setMoments] = useState([]);
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState();
    const [question, setQuestion] = useState();
    const [dialogData, setDialogData] = useState();

    const [isUpdateActive, setIsUpdateActive] = useState(false);
    const [momentToUpdate, setMomentToUpdate] = useState();
    const [updatedMoment, setUpdatedMoment] = useState();

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        addUserToMoment();
    }, [users]);

    useEffect(() => {
    }, [moments])

    const getData = () => {
        momentAPIService.getAllMoments().then(res => {
            if (res) {
                setMoments(res);
                getUsers();
            }
        });
    }

    const getUsers = () => {
        userService.getUsers().then(res => { if (res) setUsers(res) })
    }

    const addUserToMoment = () => {
        let momentsWithUser = [];
        moments.forEach(moment => {
            let user = dataService.findUser(moment, users);
            moment.userId = user;
            momentsWithUser.push(moment);
        })
        setMoments(momentsWithUser);
    }


    const erase = (data) => {
        openDialog(`Do you really want to delete moment with id: ${data.id}?`, data);
    }

    const confirmDelete = (data) => {
        closeDialog();
        momentAPIService.deleteMoment(data.id).then(res => {
            if (res) {
                openModal(`Moment with id: ${data.id} erased successfully!`)
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
        let data = updatedMoment;
        data.userId = data.userId.id;
        momentAPIService.updateMoment(generalServices.objToLowerCase(data), data.id).then(res => {
            if (res) {
                openModal(`Moment with id: ${data.id} updated successfully!`)
                getData();
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

    const like = (data) => {
        data.userId = data.userId.id;
        momentAPIService.likeMoment(data, data.id).then(res => {
            if (res) {
                getData();
            }
        })
        
        momentAPIService.likeMoment(data, data.id).then(res => {
            if (res) {
                console.log(res)
            }
        })
    }

    const save = (data) => {
        data.userId = data.userId.id;
        momentAPIService.saveMoment(data, data.id).then(res => {
            if (res) {
                getData();
            }
        })
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

    return (
        <>
            <ViewContainer>
                <Nav />
                <View>
                    <Feed location="home" moments={moments} users={users} update={update} erase={erase} like={like} save={save} />
                </View>
                <Footer />
                <>
                    {isUpdateActive || updatedMoment ?
                        <NoScrollContainer id='noscroll'>
                            {isUpdateActive ? <View bgColor={'--main-bg'} width={'95%'} ><VUpload closeUpdate={closeUpdate} moment={momentToUpdate} action={showPreview} title={'update'} /></View> : null}
                            {updatedMoment ? <PreviewCard moment={updatedMoment} confirm={confirmUpdate} cancel={cancelUpdate} title={'update'} /> : null}
                        </NoScrollContainer>
                        : null}
                </>
            </ViewContainer>
            {msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}
            {question !== undefined ? <ConfirmModal question={question} closeDialog={closeDialog} confirm={confirmDelete} data={dialogData} /> : null}
        </>
    );
}