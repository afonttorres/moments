import React, { useEffect, useState } from 'react';
import { Feed } from '../../components/Feeds/Feed';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Navs/Nav';
import { ViewContainer, View, NoScrollContainer } from '../Styles.styled';
import { VUpload } from '../../views/VUpload/VUpload';
import { PreviewCard } from '../../components/Cards/PreviewCard';
import { generalServices } from '../../services/generalServices';
import { InfoModal } from '../../components/Modals/InfoModal';
import { ConfirmModal } from '../../components/Modals/ConfirmModal';
import { momentAPIService } from '../../services/momentAPIService';
import { UsersFeed } from '../../components/Feeds/UsersFeed';
import { userAPIService } from '../../services/userAPIService';
import { Loader } from '../../components/Loader/Loader';
import { MainSliderButton } from '../../components/Buttons/Buttons.styled';
import { likeAPIService } from '../../services/likeAPIService';
import { saveAPIService } from '../../services/saveAPIService';
import { useNavigate } from 'react-router-dom';


export const Home = () => {

    const [moments, setMoments] = useState([]);
    const [users, setUsers] = useState([]);

    const [msg, setMsg] = useState();
    const [question, setQuestion] = useState();
    const [dialogData, setDialogData] = useState();

    const [isUpdateActive, setIsUpdateActive] = useState(false);
    const [momentToUpdate, setMomentToUpdate] = useState();
    const [updatedMoment, setUpdatedMoment] = useState();

    const navigate = useNavigate();

    const s = 3;
    const ms = s * 1000;

    useEffect(() => {
        setMoments();
        setTimeout(() => {
            getData();
            getUsers();
        }, ms)
    }, [])

    //GETTERS
    const getData = () => {
        momentAPIService.getAllMoments().then(res => {
            if (!res) return;
            setMoments(res);
        });
    }

    const getUsers = () => {
        userAPIService.getAllUsers().then(res => {
            if (res) setUsers(res);
        })
    }

    //DELETE
    const erase = (data) => {
        openDialog(`Do you really want to delete moment with id: ${data.id}?`, data);
    }

    const confirmDelete = (data) => {
        closeDialog();
        setMoments();
        momentAPIService.deleteMoment(data.id).then(res => {
            !res ? openModal(`Sorry, you can't delete a moment that is not yours.`) : openModal(`Moment with id: ${res.id} erased successfully!`);
            setTimeout(() => { getData() }, ms * .5)
        })
    }

    //UPDATE
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
        momentAPIService.updateMoment(generalServices.objToLowerCase(updatedMoment)).then(res => {
            if (!res) { openModal(`Sorry, you can't update a moment that is not yours.`); return }
            openModal(`Moment with id: ${res.id} updated successfully!`);
            setTimeout(() => {
                closeModal();
                setUpdatedMoment();
                setMomentToUpdate();
                setMoments();
            }, ms * .5)
            setTimeout(() => {
                getData();
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

    //LIKE
    const like = (data) => {
        likeAPIService.like(data.id).then(res => {
            if (!res) return;
            res.includes('id') ? getData() : openModal(`Sorry, you can't like your own moment!`);
        })
    }

    //SAVE
    const save = (data) => {
        saveAPIService.save(data.id).then(res => {
            if (!res) return;
            res.includes('id') ? getData() : openModal(`Sorry, you can't save your own moment!`);
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

    return (
        <>{moments ?
            <>
                <ViewContainer>
                    <Nav />
                    <View>
                        <UsersFeed users={users} />
                        <Feed location="home" moments={moments} update={update} erase={erase} like={like} save={save} />
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
            : <Loader />}
        </>
    );
}