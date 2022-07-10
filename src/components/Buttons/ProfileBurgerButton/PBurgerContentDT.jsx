import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NoScrollContainer } from "../../../pages/Styles.styled";
import { BBDContent, BgButton } from "../Buttons.styled";
import { CloseButton } from "../CloseButton";
import { InfoModal } from "../../Modals/InfoModal";

export const PBurgerContentDT = (props) => {

    const navigate = useNavigate();
    const [msg, setMsg] = useState();

    const [content, setContent] = useState([
        { icon: 'icon', content: 'settings', action: () => navigate(`/settings`) },
        { icon: 'icon', content: 'saved', action: () => navigate(`/saved`) },
        { icon: 'icon', content: 'favorites', action: () => navigate(`/favorites`) },
        { icon: 'icon', content: 'log out', action: () => logOut() }
    ]);

    const logOut = () => {
        console.log('hi')
        const s = 3;
        const ms = s * 1000;
        localStorage.removeItem('log');
        setTimeout(() => { openModal(`Logged out successfully!`) }, [1 * 1000]);
        // setTimeout(() => { props.toggleContent(false) }, [ms]);
        setTimeout(() => { navigate('/log-in') }, ms);
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
            <NoScrollContainer id="burgerCont">
                <CloseButton color={`--font-color-plain-bg`} index={'--last-i'} action={() => props.toggleContent(false)} />
                <BBDContent>{content.map((button, key) => (
                    <BgButton onClick={button.action} key={key}>{button.content}</BgButton>
                ))}
                </BBDContent>
            </NoScrollContainer>
            <>{msg !== undefined ? <InfoModal id='MODAL' msg={msg} closeModal={closeModal} /> : null}</>
        </>
    )
}