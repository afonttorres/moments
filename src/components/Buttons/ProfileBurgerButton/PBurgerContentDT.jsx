import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NoScrollContainer } from "../../../pages/Styles.styled";
import { BBDContent, BgButton } from "../Buttons.styled";
import { CloseButton } from "../CloseButton";
import { InfoModal } from "../../Modals/InfoModal";
import { Loader } from '../../Loader/Loader';

export const PBurgerContentDT = (props) => {

    const navigate = useNavigate();
    const [msg, setMsg] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const s = 3;
    const ms = s * 1000;

    useEffect(() => {
        if (!isLoading) return;
    }, [isLoading])

    const [content, setContent] = useState([
        { icon: 'icon', content: 'settings', action: () => navigate(`/settings`) },
        { icon: 'icon', content: 'saved', action: () => navigate(`/saved`) },
        { icon: 'icon', content: 'favorites', action: () => navigate(`/favorites`) },
        { icon: 'icon', content: 'log out', action: () => logOut() }
    ]);

    const logOut = () => {
        setTimeout(() => {
            openModal(`Logged out successfully!`);
        }, ms * .5);
        setTimeout(() => {
            closeModal();
            setIsLoading(true);
        }, ms);
        localStorage.removeItem('log');
        setTimeout(() => { navigate('/log-in') }, ms * 2);
    }

    //MODALS
    const openModal = (msg) => {
        setMsg(msg)
    }

    const closeModal = () => {
        setMsg();
    }

    return (
        <>
            {!isLoading ?
                <NoScrollContainer id="burgerCont">
                    <CloseButton color={`--font-color-plain-bg`} index={'--last-i'} action={() => props.toggleContent(false)} />
                    <BBDContent>{content.map((button, key) => (
                        <BgButton onClick={button.action} key={key}>{button.content}</BgButton>
                    ))}
                    </BBDContent>
                </NoScrollContainer>

                :
                <Loader index={'200'} bg={'var(--main-bg)'} position={'fixed'} />
            }
            <>{msg !== undefined ? <InfoModal id='MODAL' msg={msg} closeModal={closeModal} /> : null}</>
        </>
    )
}