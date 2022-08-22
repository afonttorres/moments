import React, { useEffect, useState } from 'react';
import { Feed } from '../../components/Feeds/Feed';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Navs/Nav';
import { ViewContainer, View, NoScrollContainer } from '../Styles.styled';
import { VUpload } from '../../views/VUpload/VUpload';
import { PreviewCard } from '../../components/Cards/PreviewCard';
import { formatUtil } from '../../utils/format';
import { InfoModal } from '../../components/Modals/InfoModal';
import { ConfirmModal } from '../../components/Modals/ConfirmModal';
import { momentAPIService } from '../../services/momentAPIService';
import { UsersFeed } from '../../components/Feeds/UsersFeed';
import { userAPIService } from '../../services/userAPIService';
import { Loader } from '../../components/Loader/Loader';
import { likeAPIService } from '../../services/likeAPIService';
import { saveAPIService } from '../../services/saveAPIService';
import { AuthService } from '../../services/AuthService';


export const Home = () => {

    const [moments, setMoments] = useState([]);
    const [users, setUsers] = useState([]);

    const [msg, setMsg] = useState();
    const [question, setQuestion] = useState();
    const [dialogData, setDialogData] = useState();

    const [isUpdateActive, setIsUpdateActive] = useState(false);
    const [momentToUpdate, setMomentToUpdate] = useState();
    const [updatedMoment, setUpdatedMoment] = useState();

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
            res.error ? openModal(res.error) : setMoments(res);
        });
    }

    const getUsers = () => {
        userAPIService.getAllUsers().then(res => {
            if (!res) return;
            res.error ? openModal(res.error) : setUsers(res);
        })
    }

    //DELETE
    const erase = (data) => {
        AuthService.isCreator(data) ? 
        openDialog(`Do you really want to delete moment with id: ${data.id}?`, data) :
        openModal(`You can't erase a moment that is not yours`); 
    }

    const confirmDelete = (data) => {
        closeDialog();
        momentAPIService.deleteMoment(data.id).then(res => {
            if (!res) return;
            if (res.error) {
                openModal(res.error);
                return;
            }
            setMoments();
            openModal(`Moment with id: ${res.id} erased successfully!`);
            setTimeout(() => { getData() }, ms * .5)
        })
    }

    //UPDATE
    const update = (data) => {
        if (!AuthService.isCreator(data)) {
            openModal(`You can't update a moment that is not yours.`)
            return;
        }
        setIsUpdateActive(true);
        setMomentToUpdate(data);
    }

    const updateData = (data) => {
        let moment = { ...momentToUpdate, ...data };
        console.table(moment)
        setUpdatedMoment(moment);
    }

    const showPreview = (data) => {
        setIsUpdateActive(false);
        updateData(data);
    }

    const confirmUpdate = () => {
        momentAPIService.updateMoment(formatUtil.objToLowerCase(updatedMoment)).then(res => {
            if (!res) return;
            setUpdatedMoment();
            setMomentToUpdate();
            if (res.error) {
                openModal(res.error);
                return;
            }
            openModal(`Moment with id: ${res.id} updated successfully!`);
            setTimeout(() => {
                closeModal();
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
    const like = (id) => {
        likeAPIService.like(id).then(res => {
            if (res === null || res === undefined) return;
            res.error ? openModal(res.error) : getData();
            //openModal(`Sorry, you can't like your own moment!`);

        })
    }

    //SAVE
    const save = (id) => {
        saveAPIService.save(id).then(res => {
            if (res === null || res === undefined) return;
            res.error ? openModal(res.error) : getData();
            //openModal(`Sorry, you can't save your own moment!`);
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
        <>
            <ViewContainer>
                <Nav />
                {moments ?
                    <View>
                        <UsersFeed users={users} />
                        <Feed location="home" moments={moments} update={update} erase={erase} like={like} save={save} />
                    </View>
                    :
                    <Loader />
                }
                <Footer />
                <>
                    {isUpdateActive || updatedMoment ? (
                        <NoScrollContainer id='noscroll'>
                            {isUpdateActive ? <View bgColor={'--main-bg'} width={'95%'} ><VUpload closeUpdate={closeUpdate} moment={momentToUpdate} action={showPreview} title={'update'} /></View> : null}
                            {updatedMoment ? <PreviewCard moment={updatedMoment} confirm={confirmUpdate} cancel={cancelUpdate} title={'update'} /> : null}
                        </NoScrollContainer>
                    ) : null}
                </>
            </ViewContainer>
            {msg !== undefined ? <InfoModal msg={msg} closeModal={closeModal} /> : null}
            {question !== undefined ? <ConfirmModal question={question} closeDialog={closeDialog} confirm={confirmDelete} data={dialogData} /> : null}
        </>
    );
}